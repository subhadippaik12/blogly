const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Subhadip:Subhadip@cluster0.nqmgaya.mongodb.net/blog-website',{useUnifiedTopology: true , useNewUrlParser : true});
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
