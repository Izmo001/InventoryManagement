"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dashboardControllers_1 = require("../controllers/dashboardControllers");
const router = (0, express_1.default)();
router.get("/", dashboardControllers_1.getDashboardMetrics);
exports.default = router;
