const jwt = require('jsonwebtoken');

const app_secret = "myappsecret";

const username = "admin";
const password = "secret";

module.exports = function (req, res, next) {

  //bir login işlemi gerçekleştiriyor isek bu ilk if içerisinde
  //bir token oluşturuyoruz ve kontrollerini ve isteklerini kontrol ediyoruz.
  //response sonlandırma yapıyoruz end ile
  if (req.url === '/login' && req.method === 'POST') {
    if (req.body.username === username && req.body.password === password) {
      // noinspection JSAnnotator
      let token = jwt.sign({data: username, expiresIn: '1h'}, app_secret);
      res.json({success: true, token: token});
    } else {
      res.json({success: false});
    }
    res.end();
    return;
  }

  //eğer bir token bilgisi var ise
  else {
    if ((req.url.startsWith("/products") || (req.url.startsWith("/categories"))) &&
      (req.method !== 'GET')) {
      let token = req.headers['authorization'];
      if (token != null && token.startsWith('Bearer<')) {
        token.substring(7, token.length-1);
        try {
          jwt.verify(token, app_secret);
          //bir token bilgisi var ise next ile middleware i devam ettiriyoruz.
          next();
          return;
        } catch (e) {

        }
        //bir problem var ise hata kodunu yazdırıyoruz.
        res.statusCode = 404;
        res.end();
        return;
      }
    }

  }
  next();
};
//bu modülü package.json dosyasında yazılan json server içinde
// -m auth-middleware.js yazarak kayıt ediyoruz.
//server üzerinden bir middleware sorgusu yaptırıyoruz.
