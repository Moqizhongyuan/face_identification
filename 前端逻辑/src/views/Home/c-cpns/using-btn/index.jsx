import React, { memo } from "react";
import { BtnWrapper } from "./style";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, Space } from "antd";
import { useNavigate } from "react-router-dom";

const UsingBtn = memo(() => {
  const colors1 = ["#6253E1", "#04BEFE"];
  // const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];
  // const colors3 = ["#40e495", "#30dd8a", "#2bb673"];
  const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  const navigate = useNavigate();

  function startUsing() {
    navigate("/Detail");
  }

  return (
    <BtnWrapper>
      <Space>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
                colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                  colors1
                ).join(", ")})`,
                colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                  colors1
                ).join(", ")})`,
                lineWidth: 0,
              },
            },
          }}
        >
          <Button type="primary" size="large" onClick={startUsing}>
            开始使用
          </Button>
        </ConfigProvider>
      </Space>
    </BtnWrapper>
  );
});

export default UsingBtn;
