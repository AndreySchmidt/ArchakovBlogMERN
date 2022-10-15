//https://www.youtube.com/watch?v=GQ_pTmcXNrQ
import express from "express";// чтобы это работало, нужно в package.json указать "type": "module"
import jwt from "jsonwebtoken";

const app = express();

// чтобы читать в запросах json в req.body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Here I am');
});

app.post('/auth/login', (req, res) => {

console.log(req.body);

// сгенерируем токен, encryptionKey - некий ключ шифрования, тут просто строка ))
// jwt.io на сайте можно расшифровать
  const token = jwt.sign({
    email: req.body.email,
    fullName: "Vasya Pupkin",
  }, 'encryptionKey');

  res.json({
    success: true,
    token,
  });
});

// port 4444
app.listen(4444, (err) => {
  if(err){
    return console.log(err);
  }
  
  console.log('Server ok');
});
