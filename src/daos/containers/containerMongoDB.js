import { faker } from "@faker-js/faker";
faker.locale = "es";
import { urlMongoDB } from "../../config/dotenv_config.js"
import { logger } from "../../config/winston_config.js"
import mongoose from "mongoose"

class ContainerMongoDB {
  constructor(model) {
    this.model = model;
  }

  // MSJ
  async ListarMsjs() {
    try {
      let msjs = await this.model.find({});
      return msjs;
    } catch (error) {
      logger.error(`Error en la API de mensajes: ${error}`);
    }
  }

  async guardarMsj(data) {
    console.log(`guardarMsj se ejecuta y va a guardar la siguiente data: ${data}`); //TESTEO
    // try {
    //   const newMsj = new this.model(data);
    //   await newMsj.save();
    //   console.log("Mensaje guardado con exito");
    // } catch (error) {
    //   logger.error(`Error en la API de mensajes: ${error}`);
    // }
  }

  //PRODS
  //Lista todos los productos.
  async GetProds() {
    try {
      let data = await this.model.find({});
      return data;
    } catch (error) {
      logger.error(`Error en la API de productos: ${error}`);
    }
  }

  //crea un producto. Recibe title, brand, price, thumbnail y stock.
  async CreateProd(data) {
    try {
      function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      const date = new Date().toLocaleString();
      const prodToAdd = {
        ...data,
        code: random(1, 9999).toString(),
        timestamp: date,
      };
      const newProd = new this.model(prodToAdd);
      await newProd.save();
      console.log("Producto creado con exito");
      return newProd;
    } catch (error) {
      logger.error(`Error en la API de productos: ${error}`);
    }
  }

  //TEST
  FakeProds() {
    const RandomProd = () => {
      return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.product(),
        price: faker.commerce.price(),
        //utilizo imagen de prueba ya que el antivirus me informa que los url de imagenes de faker poseen URL:Phishing
        thumbnail: "https://dummyimage.com/300",
      };
    };
    const products = [];
    for (let i = 0; i < 5; i++) {
      products.push(RandomProd());
    }
    return products;
  }

  //CONEXION A DB
  async MongoDB_Connect () {
    try {
      await mongoose.connect(urlMongoDB, {
        serverSelectionTimeoutMS: 10000,
      });
      logger.info('Base de datos MongoDB conectada con exito');
    } catch (err) {
      logger.error(
        `Error al conectar la base de datos: ${err}`
      );
    }
  }

  async MongoDB_Disconnect () {
    try{
      await mongoose.disconnect();
      logger.info('Base de datos MongoDB desconectada con exito');
    } catch(err) {
      logger.error(`error al desconectar la base de datos: ${err}`)
    }
  }

  //USER
  async FindUser (email) {
    try{
      const user = await this.model.findOne({ email: email })
      logger.info(`Usuario encontrado`)
      return user
    }catch(error){
      logger.error( error )
    }
  }

  async SaveUser(newUser){
    try{
      const userToSave = new this.model(newUser)
      userToSave.save()
      logger.info(`Usuario: ${newUser.username} registrado con exito!`);
    }catch(error){
      logger.error(error)
    }
  }
}

export default ContainerMongoDB;