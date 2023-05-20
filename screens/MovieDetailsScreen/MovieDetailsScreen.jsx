import { useRoute } from "@react-navigation/native";
import CardDetails from "../../components/CardsContainer/components/CardDetails";

const MovieDetailsScreen = () => {
  const route = useRoute();
  const movieId = route.params?.movieId;
  const mediaType = route.params?.mediaType;

  return <CardDetails movieId={movieId} mediaType={mediaType} />;
};

export default MovieDetailsScreen;
