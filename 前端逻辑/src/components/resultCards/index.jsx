import React, { memo } from "react";
import { CardsWrapper } from "./style";
import { Card } from "antd";
import { useSelector } from "react-redux";

const ResultCards = memo((props) => {
  const faceList = useSelector((state) => state.faceInfo.faceInfo);
  console.log(faceList);
  function emotionDetectFn(emo) {
    let emotion = "";
    if (emo === "angry") emotion = "愤怒";
    else if (emo === "disgust") emotion = "厌恶";
    else if (emo === "fear") emotion = "恐惧";
    else if (emo === "happy") emotion = "高兴";
    else if (emo === "sad") emotion = "伤心";
    else if (emo === "surprise") emotion = "惊讶";
    else if (emo === "neutral") emotion = "毫无波澜";

    // console.log(emotion);
    return emotion;
  }

  function glassesDetectFn(gla) {
    if (gla === "common") return "戴了一个普通眼睛";
    else if (gla === "none") return "没有戴眼镜";
    else return "戴了一个墨镜";
  }

  return (
    <CardsWrapper>
      {faceList.map((item, index) => (
        <Card
          key={index}
          title={`人脸${index + 1}`}
          bordered={true}
          style={{
            width: 300,
            margin: "10px",
          }}
        >
          <p>年龄：{item.age}</p>
          <p>颜值：{item.beauty}</p>
          <p>心情：{emotionDetectFn(item.emotion.type)}</p>
          <p>性别：{item.gender.type === "male" ? "男" : "女"}</p>
          <p>{glassesDetectFn(item.glasses.type)}</p>
        </Card>
      ))}
    </CardsWrapper>
  );
});

export default ResultCards;
