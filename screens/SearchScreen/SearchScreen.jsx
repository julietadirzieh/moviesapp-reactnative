import React, { useEffect, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import SearchBar from "../../components/SearchBar";
import { getAllMedia } from "../../services/MediaServices";
import Card from "../../components/CardsContainer/components/Card";

const SearchScreen = () => {
  const searchInputRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchFocus = () => {
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const handleSearch = async (searchText) => {
    const aux = [];
    const { data: allMoviesData, mediaType: moviesMediaType } =
      await getAllMedia("movie");
    const { data: allTvData, mediaType: tvMediaType } = await getAllMedia("tv");

    aux.push({
      media: allMoviesData.results,
      mediaType: moviesMediaType,
    });
    aux.push({
      media: allTvData.results,
      mediaType: tvMediaType,
    });

    setSearchResults(
      aux
        .flatMap((item) =>
          item.media.map((media) => ({
            ...media,
            mediaType: item.mediaType,
          }))
        )
        .filter((media) => {
          const title = media.title || media.name;
          return title.toLowerCase().includes(searchText.toLowerCase());
        })
    );
  };
  useEffect(() => {
    handleSearch("");
  }, []);
  useFocusEffect(handleSearchFocus);

  return searchResults ? (
    <SafeAreaView style={styles.container}>
      <SearchBar inputRef={searchInputRef} onSearch={handleSearch} />
      <FlatList
        data={searchResults}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card media={item} mediaType={item.mediaType} />
        )}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  ) : (
    <ActivityIndicator size="large" />
  );
};

export default SearchScreen;
