const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/config').mongoURI;
const app = express();
const Routes = require('./routes/index');

mongoose
.connect(db)
.then((res)=>{
    console.log('mongoDB connected')
})
.catch((err)=>console.log(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/',Routes);

const PORT =process.env.APP_PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});