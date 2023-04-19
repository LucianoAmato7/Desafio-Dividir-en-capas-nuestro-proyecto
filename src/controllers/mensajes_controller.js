import { msjDaoMongoDB } from "../daos/indexDAO.js";

//CAMBIAR NOMBRE DE CONTROLLER
export const ListarMsjs_controller = async (req, res) => {
    const mensajes = await msjDaoMongoDB.ListarMsjs()
    res.json(mensajes)
}

//VER COMO PASARLE PARAMETROS
export const guardarMsj_controller = async (req, res) => {
    const data = req.body
    const mensajes = await msjDaoMongoDB.guardarMsj(data)
    res.json(mensajes)
}