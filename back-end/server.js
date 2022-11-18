const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

//async function main() {
// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

//what does the schema do and mean in https://github.com/BYU-CS-260/learning-mongo/blob/master/lesson3/README.md?
//Schema is the way data is organized in a table. Setups the data fields and the data types of those fields. Like they control the headers of your table
//Is there a way for me to see all my mongoose data? Can download mongo db app. or use command line. 
//how to handle other API? Call it from the front end. Push and store data in my own backend

  const savedArtSchema = new mongoose.Schema ({
    artID: Number,
  });
  
  const SavedArt = mongoose.model('SavedArt', savedArtSchema);
  
  app.get('/api/saved', async(req, res) => {
    try {
      let saved = await SavedArt.find();
      res.send({saved: saved});
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.post('/api/saved/:id', async (req, res) => { //adds random string as ID
    const saved = new SavedArt({
    artID: req.params.id, //not sure if this line is correct
  });
    try {
      await saved.save();
      res.send({saved:saved});
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }); 
  
  app.delete('/api/saved/:id', async (req, res) => { //Maybe make a delete all? How to delete extra data. 
    try {
      await SavedArt.deleteOne({
        artID: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  const artCollectionSchema = new mongoose.Schema ({
    artID: Number
  });
  
  
  const ArtPiece = mongoose.model('ArtPiece', artCollectionSchema);
  
  app.get('/api/collection', async(req, res) => {
    try {
      let collection = await ArtPiece.find();
      res.send({collection: collection});
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.post('/api/collection/:id', async (req, res) => { //adds random string as ID
    const collection = new ArtPiece({
    artID: req.params.id,
  });
    try {
      await collection.save();
      res.send({collection:collection});
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }); 
  
  app.delete('/api/collection/:id', async (req, res) => { //Maybe make a delete all? How to delete extra data. 
    try {
      await ArtPiece.deleteOne({
        artID: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  
  const artDepartmentSchema = new mongoose.Schema ({
   deptID: Number,
    name: String
  });
  
  
  const Department = mongoose.model('Department', artDepartmentSchema);
  
  app.get('/api/department', async(req, res) => {
    try {
      let department = await Department.find();
      res.send({department: department});
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.post('/api/department/:id', async (req, res) => { //adds random string as ID
    const department = new Department({
    deptID: req.params.id,
  });
    try {
      await department.save();
      res.send({department:department});
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }); 
  
  app.delete('/api/department/:id', async (req, res) => { //Maybe make a delete all? How to delete extra data. 
    try {
      await Department.deleteOne({
        deptID: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  

//main().catch(console.error);
  
app.listen(3000, () => console.log('Server listening on port 3000!'));


 /*savedArtSchema.methods.speak = function speak() {
    console.log('Art piece saved, id is ' + (this.id || 'noID'));
  };*/

  /*savedArtSchema.virtual('id') //kinda works but sets a random number as the id still
    .get(function() {
      return this._id; //.toHexString();
  });
  
  
  savedArtSchema.set('toJSON', {
    virtuals: true
  });
  
  */
  
   /* artDepartmentSchema.virtual('id')
  .get(function() {
    return this._id; //.toHexString();
  });
  
  artDepartmentSchema.set('toJSON', {
    virtuals: true
  });
  */
  
    /*artCollectionSchema.virtual('id')
  .get(function() {
    return this._id; //.toHexString();
  });
  
  artCollectionSchema.set('toJSON', {
    virtuals: true
  });
  */
  