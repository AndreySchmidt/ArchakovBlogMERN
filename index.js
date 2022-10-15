//https://www.youtube.com/watch?v=GQ_pTmcXNrQ
import express from "express";// чтобы это работало, нужно в package.json указать "type": "module"

const app = express();

// чтобы читать в запросах json в req.body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Here I am');
});

app.post('/auth/login', (req, res) => {
  res.json({
    success: true,
  });
});

// port 4444
app.listen(4444, (err) => {
  if(err){
    return console.log(err);
  }
  
  console.log('Server ok');
});
