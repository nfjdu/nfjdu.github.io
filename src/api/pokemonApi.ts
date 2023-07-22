import { emptySplitApi } from "./emptyApi";

type PokemonPagination = {
  count: number;
  results: Array<any>;
};

const pokemonApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemons: build.query<PokemonPagination, { limit: number; offset: number }>({
      query: ({ limit, offset }) => ({ url: `pokemon`, params: { limit, offset } }),
    }),
    getPokemonByName: build.query<any, { name: string }>({
      query: ({ name }) => `pokemon/${name}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi;
