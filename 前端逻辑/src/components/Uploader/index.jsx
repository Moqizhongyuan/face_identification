import React, { memo } from "react";
import { UploaderWrapper } from "./style";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
const props = {
  name: "file",
  action: "http://47.115.214.21:8000",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Uploader = memo(() => {
  return (
    <UploaderWrapper>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </UploaderWrapper>
  );
});

export default Uploader;
