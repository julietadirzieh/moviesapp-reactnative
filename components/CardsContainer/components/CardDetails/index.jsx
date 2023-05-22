import React, { useEffect, useState } from "react";
import { Image, Text, View, ScrollView, ActivityIndicator } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../Button";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { fetchMediaDetails } from "../../../../services/MediaServices";

const CardDetails = ({ movieId, mediaType }) => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate("Home");
  };

  const [data, setData] = useState(null);

  const fetchData = async () => {
    if (movieId && mediaType) {
      try {
        const fetchMediaDetailsData = await fetchMediaDetails(
          mediaType,
          movieId
        );
        setData(fetchMediaDetailsData);
      } catch (error) {
        console.log(error); // Verificar si hay algún error
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" style={styles.indicator} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  const { title, name, poster_path, overview, vote_average, vote_count } = data;
  const mediaTitle = title || name;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        icon="close"
        size="small"
        outlined
        style={styles.close}
        onPress={handleClose}
      />
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
      <Text style={styles.title}>{mediaTitle}</Text>
      <Text style={styles.voteAverage}>
        <Ionicons name="star" size={15} color="#E50914" /> {vote_average}
        <Text style={styles.voteCount}> {vote_count} votes</Text>
      </Text>
      <Text style={styles.overview}>{overview}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          icon="play"
          size="large"
          label="Play"
          style={styles.btn}
          onPress={() => console.log("Play button pressed")}
        />
        <Button
          icon="download"
          size="large"
          outlined
          label="Download"
          style={styles.btn}
          onPress={() => console.log("Download button pressed")}
        />
      </View>
    </ScrollView>
  );
};

export default CardDetails;
