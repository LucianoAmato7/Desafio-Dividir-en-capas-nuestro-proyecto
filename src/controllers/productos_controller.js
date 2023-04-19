import { productsDaoMongoDB } from "../daos/indexDAO.js";

export const GetProds_controller = async (req, res) => {
    const productos = await productsDaoMongoDB.GetProds()
    res.json(productos)
}