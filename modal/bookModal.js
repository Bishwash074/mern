const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
  bookName:{
    type:String,
    unique:true
  },
  bookPrice:{
    type:String
  },
  isbnNumber:{
    type:String,
  },
  authorName:{
    type:String
  },
  publishedAt:{
    type:String
  }
})

const Book=mongoose.model("Book",bookSchema)
module.exports=Book