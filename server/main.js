import express from 'express';
const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.set("views", "views");
import bodyParser from'body-parser';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/save_Recipe', function(req, res) {
	res.send({status : true, data : req.body})
});


app.listen(port, () => console.log(`Example app listening on 
  ${port}!`))

