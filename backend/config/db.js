//angela789 : mongodb password
import mongoose from "mongoose"
// import 'DB_NAME'
export const connectdb = async ()=>{
try {
  await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
.then(()=>console.log('Db connected'));
} catch (error) {
  console.log("There is an error ",error)
}
}

