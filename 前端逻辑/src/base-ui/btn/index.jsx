import React, { memo } from "react";
import propTypes from "prop-types";
import { BtnWrapper } from "./style";
import { Button, Flex } from "antd";

const Btn = memo((props) => {
  return (
    <BtnWrapper>
      <Flex gap="small" wrap>
        <Button type="primary">{props.content}</Button>
      </Flex>
    </BtnWrapper>
  );
});

Btn.propTypes = {
  content: propTypes.string,
};

export default Btn;
