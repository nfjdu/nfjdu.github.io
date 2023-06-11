import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const StyleguidePage = () => {
  return (
    <>
      <Typography variant='h1'>Style&shy;giude</Typography>
      <Outlet />
    </>
  );
};

export default StyleguidePage;
