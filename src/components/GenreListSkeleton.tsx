import {
  List,
  ListItem,
  HStack,
  Skeleton,
  SkeletonText,
  Text,
  Box,
  Card,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <Box>
      {skeletons.map((item) => (
        <Box key={item}>
          <Skeleton height={"40px"} marginY={"10px"} borderRadius={"4px"} />
        </Box>
      ))}
    </Box>
  );
};

export default GenreListSkeleton;
