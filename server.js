const express = require('express');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.get('/pet', function (요청, 응답) {
  응답.send('펫용품을 쇼핑할 수 있는 사이트입니다.반갑습니다');
});

app.get('/beauty', function (req, res) {
  res.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.');
});
