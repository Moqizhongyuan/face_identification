import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import LeftHeader from "./c-cpns/Left_header";

const index = memo(() => {
  return (
    <HeaderWrapper>
      <LeftHeader />
      <div className="center">center</div>
      <div className="right">right</div>
    </HeaderWrapper>
  );
});

export default index;
