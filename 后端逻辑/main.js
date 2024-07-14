const http = require("http");
const { faceDetect } = require("./face_detect");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/analyze") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const requestData = JSON.parse(body);
      const base64 = requestData.file;

      // 在这里进行图片分析的逻辑
      // 可以使用原生方法或第三方库来进行图片分析

      // 假设这里返回了分析结果
      faceDetect(base64)
        .then(function (result) {
          // console.log("检测结果:", result);
          const analysisResult = result;
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.end(JSON.stringify(analysisResult));
        })
        .catch(function (err) {
          // console.error("错误:", err);
          // 在这里处理错误
          // const analysisResult = err
          console.log("error:", err);
          res.statusCode = 300;
          res.end("error");
        });
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(1122, () => {
  console.log("服务器正在监听1122端口");
});
