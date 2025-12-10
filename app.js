const express=require('express')
const connectToDatabase = require('./database')
const Book = require('./modal/bookModal')
const app=express()


app.use(express.json())
const{multer,storage}=require('./middleware/multerConfig')
const upload=multer({storage:storage})

connectToDatabase()
app.get("/",(req,res)=>{
  res.status(200).json({
    name:"Bishwas",
    age:20
  })
})

app.post("/book",upload.single('image'),async(req,res)=>{
  const{bookName,bookPrice,isbnNumber,authorName,publishedAt,image}=req.body
  await Book.create({
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    image,
  })
  res.status(201).json({
    message:"created sucessfully"
  })
})

app.get("/book",async(req,res)=>{
  const book=await Book.find()
  res.status(200).json({
    message:"Book fetched sucessfully",
    data:book
  })
})

app.get("/book/:id",async(req,res)=>{
  const id=req.params.id
  const book=await Book.findById(id)
  res.status(200).json({
    message:"book are fetched sucessfully",
    data:book
  })
})

app.delete("/book/:id",async(req,res)=>{
  const id=req.params.id
  const bookDeleted=await Book.findByIdAndDelete(id)
  res.json({
    message:"Books sucessfully deleted"
  })
})

app.patch("/book/:id",async(req,res)=>{
  const id =req.params.id
  const {bookName,bookPrice,isbnNumber,authorName,publishedAt}=req.body
  const bookUpdate=await Book.findByIdAndUpdate(id,{
    bookName:bookName,
    bookPrice:bookPrice,
    authorName:authorName,
    isbnNumber:isbnNumber,
    publishedAt:publishedAt


  })
  res.json({
    message:"Book Updated Sucessfully"
  })
})

app.listen(3000,()=>{
  console.log("Node js server has started at port 3000")
})

