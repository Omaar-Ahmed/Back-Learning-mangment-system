<<<<<<< HEAD
import { Router } from 'express';
import { getCourse, listCourses } from './controller/courses'
const router = Router();

router.get("/listcourses", listCourses)
router.get("/:courseId", getCourse)









=======
import { Router } from 'express';
import { getCourse, listCourses } from './controller/courses'
const router = Router();

router.get("/listcourses", listCourses)
router.get("/:courseId", getCourse)









>>>>>>> c0c7f752c4912839c4b38841812e7130e589ff79
export default router 