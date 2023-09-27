import { Outlet } from "react-router-dom";
import TypographyWithDivider from "../../components/TypographyWithDivider";

const ExamplesPage = () => {
  return (
    <>
      <TypographyWithDivider variant='h1'>Examples</TypographyWithDivider>
      <Outlet />
    </>
  );
};

export default ExamplesPage;
