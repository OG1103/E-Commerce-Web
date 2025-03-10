import MetaTags from "@/app/Components/atoms/metaTags/metaTags";
import BasicLayout from "@/app/Layouts/basicLayout";

import { NextPage } from "next";

const HomePage: NextPage = () => {

  const metaTags = {
    title: 'Home',
    description: 'Your Muhra Fashion'
  };

  return (
    <>
      <MetaTags {...metaTags} />
      <BasicLayout>
        <h1>Hello</h1>
      </BasicLayout>
    </>
  );
};

export default HomePage;