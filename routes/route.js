import { Router } from "express";
import controller from "../controllers/controller.js";

const router = Router();

router.get('/users',controller.getAll);
router.get('/users/create',controller.createUser);
router.delete('/users/delete/:id',controller.deleteUser)
router.get('/users/get/:id',controller.getuserById )
router.post('/users',controller.register )



export default router;