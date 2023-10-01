import { Outlet } from "react-router-dom";
import TypographyWithDivider from "../../../components/TypographyWithDivider";
import { Alert, Stack } from "@mui/material";
import PageSideNav from "../../../components/PageSideNav";

const GraphicsPage = () => {
  return (
    <>
      <TypographyWithDivider variant='h2'>Graphics</TypographyWithDivider>

      <Alert variant='outlined' severity='info'>
        Work in progress...
      </Alert>

      <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 2 }} gap={2}>
        <PageSideNav
          links={[
            { text: "Models", to: "/dev/examples/graphics/models" },
            { text: "Other", to: "/dev/examples/graphics/other" },
          ]}
        />
        <Stack direction='column' sx={{ flex: 1 }}>
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
};

export default GraphicsPage;
