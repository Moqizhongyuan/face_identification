import React, { memo } from "react";
import { AnaBtnWrapper } from "./style";
import Btn from "../../../../base-ui/btn";
import { useDispatch, useSelector } from "react-redux";
import { AnalyzeFace } from "../../../../services";
import { changeFaceInfoAction } from "../../../../store/modules/faceInfo";

const AnalyzeBtn = memo(() => {
  const dispatch = useDispatch();
  const fileInfo = useSelector((state) => state.file.fileInfo);
  function handleImageUpload() {
    AnalyzeFace(fileInfo)
      .then((res) => {
        // console.log(res);
        const faceList = [];
        res.face_list.forEach((item) => {
          faceList.push(item);
        });
        dispatch(changeFaceInfoAction(faceList));
      })
      .catch((err) => {
        console.log("analyze error:", err);
      });
  }
  return (
    <AnaBtnWrapper>
      <div onClick={() => handleImageUpload()}>
        <Btn content="识别已有图片" />
      </div>
    </AnaBtnWrapper>
  );
});

export default AnalyzeBtn;
