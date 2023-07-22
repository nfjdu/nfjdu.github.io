import { Outlet } from "react-router-dom";
import HeadingWithDivider from "../../components/HeadingWithDivider";

const DevPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h1'>Dev</HeadingWithDivider>
      <Outlet />
    </>
  );
};

export default DevPage;
