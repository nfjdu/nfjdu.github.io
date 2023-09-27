import { Pagination, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import { useGetPokemonsQuery } from "../../../api/pokemonApi";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import Pokemon from "./Pokemon";
import { useState } from "react";

const RESTPage = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [limit, _setLimit] = useState<number>(isMobile ? 10 : 20);
  const [offset, setOffset] = useState<number>(0);
  const { data, isLoading } = useGetPokemonsQuery({ limit, offset });

  return (
    <>
      <HeadingWithDivider variant='h2'>REST (using RTK Query)</HeadingWithDivider>

      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Stack direction='row' flexWrap='wrap'>
          {data?.results?.map((item: any) => (
            <Pokemon key={item.name} name={item.name} />
          ))}
        </Stack>
      )}
      <Pagination
        size={isMobile ? "small" : "medium"}
        sx={{ ml: "auto", mr: "auto", mt: 2 }}
        count={parseInt(((data?.count || 1) / limit).toFixed(0))}
        onChange={(_e, page) => {
          setOffset((page - 1) * limit);
        }}
      />
    </>
  );
};

export default RESTPage;
