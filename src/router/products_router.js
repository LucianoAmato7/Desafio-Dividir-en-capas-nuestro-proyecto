import { GetProds_controller } from "../controllers/productos_controller.js"
import { Router } from "express";

const router = Router();

router.get("/", GetProds_controller)

export default  router