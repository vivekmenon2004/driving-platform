import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import { authenticate } from "../../../middleware/authenticate.js";

const router = Router();

router.use(authenticate);

router.get("/me", usersController.getMe.bind(usersController));
router.put("/me", usersController.updateMe.bind(usersController));

export default router;
