import mongoose from "mongoose";

export async function MongoDB_Connect (){
  try {
    await mongoose.connect(urlMongoDB, {
      serverSelectionTimeoutMS: 10000,
    });
  } catch (err) {
    console.log(
      `Error al conectar la base de datos: ${err}`
    );
  }finally{
    console.log('Base de datos MongoDB conectada con exito');
  }
}

export async function MongoDB_Disconnect (){
  try{
    await mongoose.disconnect();
  } catch(err) {
    console.log(`error al desconectar la base de datos: ${err}`)
  }finally{
    console.log('Base de datos MongoDB desconectada con exito');
  }
}