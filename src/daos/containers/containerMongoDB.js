import { faker } from "@faker-js/faker";
faker.locale = "es";

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

  // MSJ
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
}

export default ContainerMongoDB;