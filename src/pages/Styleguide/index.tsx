import { Outlet } from "react-router-dom";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import { Stack } from "@mui/material";
import PageSideNav from "../../components/PageSideNav";

const StyleguidePage = () => {
  return (
    <>
      <TypographyWithDivider variant='h1'>Style&shy;giude</TypographyWithDivider>
      <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 2 }} gap={2}>
        <PageSideNav
          links={[
            { text: "Buttons", to: "/dev/styleguide/buttons" },
            { text: "Colors", to: "/dev/styleguide/colors" },
            { text: "Dividers", to: "/dev/styleguide/dividers" },
            { text: "Icons", to: "/dev/styleguide/icons" },
            { text: "Tags", to: "/dev/styleguide/tags" },
            { text: "Typography", to: "/dev/styleguide/typography" },
          ]}
        />

        <Stack direction='column' sx={{ flex: 1 }}>
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
};

export default StyleguidePage;
