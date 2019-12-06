const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');
a
// connect to the database
mongoose.connect('mongodb://localhost:27017/tickets', {
  useNewUrlParser: true
});

const multer = require('multer')
const upload = multer({
  dest: './public/images/',
  limits: {
    fileSize: 10000000
  }
});

const itemSchema = new mongoose.Schema({
    title: String,
    path: String,
});

// Create a model for items in the website.
const Item = mongoose.model('Item', itemSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

// Create a new item in the website: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
    const item = new Item({
        title: req.body.title,
        path: req.body.path,
    });
    try {
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all of the items in the website.
app.get('/api/items', async (req, res) => {
    try {
        let items = await Item.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


app.delete( 'api/items/:id', async (req,res)=> {
    try {
        console.log("In New Delete "+req.params.id);
        console.log(req.params);
        let items = await Item.deleteOne({_id:req.params.id});
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
  

app.listen(3000, () => console.log('Server listening on port 3000!'));

