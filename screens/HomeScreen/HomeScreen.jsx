import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import CardsContainer from "../../components/CardsContainer";
import {
  getAllMedia,
  getLatestMedia,
  getTopRatedMedia,
} from "../../services/MediaServices";

const HomeScreen = () => {
  const [mediaData, setMediaData] = useState(null);

  const fetchData = async () => {
    const { data: allMoviesData, mediaType: moviesMediaType } =
      await getAllMedia("movie");
    const { data: topRatedMoviesData, mediaType: topRatedMoviesMediaType } =
      await getTopRatedMedia("movie");
    const { data: latestMoviesData, mediaType: latestMoviesMediaType } =
      await getLatestMedia("movie");

    const { data: allTvData, mediaType: tvMediaType } = await getAllMedia("tv");
    const { data: topRatedTvData, mediaType: topRatedTvMediaType } =
      await getTopRatedMedia("tv");
    const { data: latestTvData, mediaType: latestTvMediaType } =
      await getLatestMedia("tv");

    setMediaData({
      movies: { data: allMoviesData, mediaType: moviesMediaType },
      topRatedMovies: {
        data: topRatedMoviesData,
        mediaType: topRatedMoviesMediaType,
      },
      latestMovies: {
        data: latestMoviesData,
        mediaType: latestMoviesMediaType,
      },
      tv: { data: allTvData, mediaType: tvMediaType },
      topRatedTv: {
        data: topRatedTvData,
        mediaType: topRatedTvMediaType,
      },
      latestTv: {
        data: latestTvData,
        mediaType: latestTvMediaType,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return mediaData ? (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>All movies</Text>
          <CardsContainer data={mediaData.movies} />
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.title}>All TV shows</Text>
          <CardsContainer data={mediaData.tv} />
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.title}>Top Rated Movies</Text>
          <CardsContainer data={mediaData.topRatedMovies} />
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.title}>Top Rated TV shows</Text>
          <CardsContainer data={mediaData.topRatedTv} />
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.indicator} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default HomeScreen;
