const express = require('express');
const dbConnect = require('./config/dbConnect');
const Url = require('./models/urlSchema');
const app = express();
const PORT = process.env.PORT || 5000;
dbConnect();

/* extended:false is for parsing string or arr 'values' (from key-value pairs in req's body), 
 *  extended:true is for any other type also.
 */
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('/',async(req,res) => {
    const urlArr = await Url.find();
    res.render('index',{urlArr});
});

app.get('/:cid',async (req,res) => {
    const foundUrl = await Url.findOne({compressedUrl:req.params.cid});
    if(foundUrl) {
        foundUrl.clicks++;
        await foundUrl.save();
        res.redirect(foundUrl.fullUrl);
    }
})

app.post('/compress/url',async(req,res) => {
    if(req.body.completeUrl) {
        await Url.create({fullUrl:req.body.completeUrl});
    }
    res.redirect('/');
});

app.listen(PORT,() => {
    console.log(`app is listening at port ${PORT}`)
});