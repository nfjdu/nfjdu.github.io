import { Outlet } from "react-router-dom";
import TypographyWithDivider from "../../components/TypographyWithDivider";

const ApiPage = () => {
  return (
    <>
      <TypographyWithDivider variant='h1'>API examples</TypographyWithDivider>
      <Outlet />
    </>
  );
};

export default ApiPage;
