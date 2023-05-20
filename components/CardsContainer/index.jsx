import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import Card from "./components/Card";

const CardsContainer = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          {data?.data?.results?.map((media) => (
            <Card key={media.id} media={media} mediaType={data.mediaType} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CardsContainer;
