//https://www.youtube.com/watch?v=GQ_pTmcXNrQ
import express from "express";

const app = express();
app.get('/', (req, res) => {
  res.send('HW');
});

// port 4444
app.listen(4444, (err) => {
  if(err){
    return console.log(err);
  }
  
  console.log('Server ok');
});
