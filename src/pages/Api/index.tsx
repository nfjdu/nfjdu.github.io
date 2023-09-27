import { Outlet } from "react-router-dom";
import HeadingWithDivider from "../../components/HeadingWithDivider";

const ApiPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h1'>Api</HeadingWithDivider>
      <Outlet />
    </>
  );
};

export default ApiPage;
