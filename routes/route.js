import { Router } from "express";
import controller from "../controllers/controller.js";

const router = Router();

router.get('/users',controller.getAll);
router.get('/users/:id',controller.getuserById )
router.get('/users/register',controller.register )
 export default router;