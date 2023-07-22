import { CircularProgress, Typography, Box, Stack } from "@mui/material";
import { useGetPokemonByNameQuery } from "../../../../api/pokemonApi";

interface Props {
  name: string;
}

const Pokemon = ({ name }: Props) => {
  const { data, isLoading } = useGetPokemonByNameQuery({ name });

  return (
    <Stack spacing={1}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box component='img' src={data?.sprites?.front_default} />
      )}
      <Typography>{name}</Typography>
    </Stack>
  );
};

export default Pokemon;
