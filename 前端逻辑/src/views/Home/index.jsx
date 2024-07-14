import React, { memo } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banners";
import UsingBtn from "./c-cpns/using-btn";

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <UsingBtn />
    </HomeWrapper>
  );
});

export default Home;
