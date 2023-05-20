import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Card = ({ media, mediaType }) => {
  const { poster_path, id, title, overview } = media;

  const navigation = useNavigation();
  const handleCardPress = () => {
    navigation.navigate("MovieDetails", { mediaType: mediaType, movieId: id });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
    </TouchableOpacity>
  );
};

export default Card;
