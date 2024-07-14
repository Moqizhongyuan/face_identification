import React, { memo, useEffect, useRef } from "react";
import { CameraWrapper } from "./style";

const camera = memo(() => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      })
      .catch((error) => {
        console.log("访问摄像头失败：", error);
      });
    return () => {
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <CameraWrapper>
      <video ref={videoRef} autoPlay className="video"></video>
    </CameraWrapper>
  );
});

export default camera;
