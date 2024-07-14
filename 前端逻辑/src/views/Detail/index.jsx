import React, { memo, useEffect, useState } from "react";
import { DetailWrapper } from "./style.js";
import Camera from "../../components/camera";
import Btn from "../../base-ui/btn";
import AnalyzeBtn from "./c-cpns/AnalyzeBtn/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFileImgAction,
  changeFileInfoAction,
} from "../../store/modules/file.js";
import ResultCards from "../../components/resultCards/index.jsx";
import detailImage from "../../assets/image/detail.jpg";
import Uploader from "../../components/Uploader/index.jsx";

const Detail = memo(() => {
  // useFaceRecognition();

  const [showImg, setShowImg] = useState(true);
  const dispatch = useDispatch();
  const fileImg = useSelector((state) => state.file.fileImg);
  const faceInfo = useSelector((state) => state.faceInfo.faceInfo);

  useEffect(() => {
    dispatch(changeFileImgAction(detailImage));
  }, []);

  function fileHandle(e) {
    const file = e.target.files[0];
    // console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target.result.split(",")[1];
      dispatch(changeFileInfoAction(base64Image));
      dispatch(changeFileImgAction(event.target.result));
    };

    reader.readAsDataURL(file);
  }

  function selectImg() {}
  return (
    <DetailWrapper>
      <div className="showContent">
        <div className="content">
          {showImg ? <img src={fileImg} alt="Selected Image" /> : <Camera />}
        </div>
        <div className="btn">
          <Btn content="开始检测人脸" />
          <AnalyzeBtn selectImg={selectImg} />
          <Btn />
          <Btn />
          <input type="file" accept="image/*" onChange={(e) => fileHandle(e)} />
          <Uploader />
        </div>
      </div>
      <div className="showResult">{faceInfo[0] ? <ResultCards /> : ""}</div>
    </DetailWrapper>
  );
});

export default Detail;
