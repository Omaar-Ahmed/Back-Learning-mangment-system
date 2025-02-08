"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courses_1 = require("./controller/courses");
const router = (0, express_1.Router)();
router.get("/listcourses", courses_1.listCourses);
router.get("/:courseId", courses_1.getCourse);
exports.default = router;
