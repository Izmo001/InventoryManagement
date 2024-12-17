import { Router } from "express";
import { getExpenseByCategory } from "../controllers/expenseController";
import { get } from "http";
 
const router = Router();

router.get("/", getExpenseByCategory);

export default router;