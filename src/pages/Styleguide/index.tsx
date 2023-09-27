import { Outlet } from "react-router-dom";
import HeadingWithDivider from "../../components/HeadingWithDivider";

const StyleguidePage = () => {
  return (
    <>
      <HeadingWithDivider variant='h1'>Style&shy;giude</HeadingWithDivider>
      <Outlet />
    </>
  );
};

export default StyleguidePage;
