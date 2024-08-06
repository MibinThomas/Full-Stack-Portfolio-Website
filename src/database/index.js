import mongoose from "mongoose";

export default async function connectToDB(){
 try{
    await mongoose.connect('mongodb+srv://mibinthomas22:LTTfxSEcvfKiAd6p@cluster0.rcdhik2.mongodb.net/')
    console.log('Database connceted Succefully');
 }catch(e){
    console.log(e);
 }
}