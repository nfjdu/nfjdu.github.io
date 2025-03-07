import { CircularProgress, Typography, Box, Stack } from "@mui/material";
import { /*pokemonApi,*/ useGetPokemonByNameQuery } from "../../../../api/pokemonApi";

interface Props {
  name: string;
}

const Pokemon = ({ name }: Props) => {
  const { data, isLoading } = useGetPokemonByNameQuery({ name });
  // const { data, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery({ name });

  return (
    <Stack
      sx={{
        width: { xxs: "50%", xxs: "30%", sm: "20%", md: "20%", lg: "10%" },
        alignItems: "center",
      }}
      spacing={1}
    >
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
