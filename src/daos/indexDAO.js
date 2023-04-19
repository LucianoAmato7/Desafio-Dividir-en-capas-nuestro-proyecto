import MsjDaoMongoDB from "./mensajes/mensajes_dao.js";
import ProductsDaoMongoDB from "./productos/productos_dao.js";

export const msjDaoMongoDB = new MsjDaoMongoDB();
export const productsDaoMongoDB = new ProductsDaoMongoDB();