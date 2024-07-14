import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconHome from "../../../../assets/svg/icon-home";
import { useNavigate } from "react-router-dom";

const LeftHeader = memo(() => {
  const navigate = useNavigate();

  function HomeBtnClick() {
    navigate("/home");
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={HomeBtnClick}>
        <IconHome />
      </div>
    </LeftWrapper>
  );
});

export default LeftHeader;
