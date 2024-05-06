function verifyToken(req, res, next) {
    const jwt = require("jsonwebtoken");
  
    //console.log(req.headers.authorization)
    if (!req.headers.authorization) {
      return res.status(401).send("Autorizacion denegada** >:(");
    }
    console.log(req.headers.authorization)
    const token = req.headers.authorization;
    console.log(token);
    if (token === "null") {
      return res.status(401).send("Autorizacion denegada** >:(");
    }
  
    const payload = jwt.verify(token, process.env.KEYjwt);
    console.log(payload);
    req.userToken = payload;
  
    next();
  
    console.log(payload._email);
  }
  
  module.exports = verifyToken;