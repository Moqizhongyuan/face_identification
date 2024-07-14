import axios from "axios";

export function AnalyzeFace(base64) {
  const file = base64; // 替换为你要发送的图片URL
  // console.log(file);

  const url = "/analyze"; // 替换为服务器分析图片的URL

  return axios
    .post(url, { file }, { headers: { "Content-Type": "application/json" } })
    .then((response) => {
      // console.log("Response:", response.data);
      // // 在这里处理服务器返回的分析信息
      // console.log("result: ", response.data.result);
      return response.data.result;
    })
    .catch((error) => {
      // console.error("Error:", error);
      return error;
    });
}
