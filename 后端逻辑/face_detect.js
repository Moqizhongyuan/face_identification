var AipFaceClient = require("baidu-aip-sdk").face;
var HttpClient = require("baidu-aip-sdk").HttpClient;

// 设置APPID/AK/SK
var APP_ID = "******";
var API_KEY = "******";
var SECRET_KEY = "******";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);

// 设置request库的一些参数，例如代理服务地址，超时时间等
// request参数请参考 https://github.com/request/request#requestoptions-callback
HttpClient.setRequestOptions({ timeout: 5000 });

// 也可以设置拦截每次请求（设置拦截后，调用的setRequestOptions设置的参数将不生效）,
// 可以按需修改request参数（无论是否修改，必须返回函数调用参数）
// request参数请参考 https://github.com/request/request#requestoptions-callback
HttpClient.setRequestInterceptor(function (requestOptions) {
  // 查看参数
  // console.log(requestOptions);
  // 修改参数
  requestOptions.timeout = 10000;
  // 返回参数
  return requestOptions;
});

function faceDetect(base64) {
  var image = base64;
  // console.log(image);
  var imageType = "BASE64";
  var options = {};
  options["max_face_num"] = "2";
  options["face_type"] = "LIVE";
  options["liveness_control"] = "LOW";
  options["face_field"] = "beauty,gender,age,glasses,emotion";

  return new Promise(function (resolve, reject) {
    client
      .detect(image, imageType, options)
      .then(function (result) {
        // console.log(JSON.stringify(result));
        resolve(result);
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });
  });
}

module.exports = {
  faceDetect,
};
