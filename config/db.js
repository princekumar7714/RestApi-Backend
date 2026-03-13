import mongoose from "mongoose";
const connectDB = async () => {
    try {
       const DB_OPTIONS = {
        dbNAME : process.env.DB_NAME || "company",  
       };
       await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://prince:prince123@cluster0.bb7ywa1.mongodb.net/productDB", DB_OPTIONS);
       console.log('DAtabase connected succesfully')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }   
}

export default connectDB;