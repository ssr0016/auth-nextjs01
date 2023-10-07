//talking/interacting to Database
import mongoose from 'mongoose';

export async function connect(){
    //handling errors
    try{
        //Typescript ! is for ignoring the warning for MONGO_URI!   
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected', () =>{
            console.log('MongoDB connected successfully!');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connetion error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
    }
}