import ContainerMongoDB from "../containers/containerMongoDB.js";
import { Msj_Model } from "../../models/mensaje_model.js"

class MsjDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(Msj_Model)
  }
};

export default MsjDaoMongoDB