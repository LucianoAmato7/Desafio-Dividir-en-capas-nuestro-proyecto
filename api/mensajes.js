import { logger } from "../config/winston_config.js";
import { Msj_Model } from "../src/models/mensaje_model.js"



class ApiMsjMongoDB {
  constructor() {
    this.model = Msj_Model
    this.route = urlMongoDB
  }

  async ListarMsjs() {
      try{
        let msjs = await this.model.find({})
        return msjs
      }catch(error){
        logger.error(`Error en la API de mensajes: ${error}`);
      }
  }

  async guardarMsj(data) {
      try{
        const newMsj = new this.model(data);
        await newMsj.save();
        console.log("Mensaje guardado con exito");
      }catch(error){
        logger.error(`Error en la API de mensajes: ${error}`);
      }
  }
}

export default ApiMsjMongoDB;
