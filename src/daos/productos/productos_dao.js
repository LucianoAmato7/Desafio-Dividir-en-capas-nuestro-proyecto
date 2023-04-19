import ContainerMongoDB from "../containers/containerMongoDB.js";
import {prods_Model} from "../../models/productos_model.js"

class ProductsDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(prods_Model);
  }
}

export default ProductsDaoMongoDB