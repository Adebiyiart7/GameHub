import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedplatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedplatform }: Props) => {
  const { data, error, loading } = useGames(selectedGenre, selectedplatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={10}
      >
        {loading && skeletons.map((item) => <GameCardSkeleton key={item} />)}
        {data.map((game) => (
          <GameCard key={game.id.toString()} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
