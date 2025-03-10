import MetaTags from "@/app/Components/atoms/metaTags/metaTags";
import HomeTemplate from "@/app/Components/templates/home/HomeTemplate";
import { NextPage } from "next";

const HomePage: NextPage = () => {

  const metaTags = {
    title: 'Home',
    description: 'Your Muhra Fashion'
  };

  return (
    <>
      <MetaTags {...metaTags} />
      <HomeTemplate/>
    </>
  );
};

export default HomePage;