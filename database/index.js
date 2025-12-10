const mongoose=require('mongoose')
const connectionString="mongodb+srv://bishwasdhital73:V1iZZ5OHoWT2eu6j@mern.kpvay69.mongodb.net/?appName=mern"
async function connectToDatabase(){
  await mongoose.connect(connectionString)
  console.log("Connect to database sucesfully")
}

module.exports=connectToDatabase