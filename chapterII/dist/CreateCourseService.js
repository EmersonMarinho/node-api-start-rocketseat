"use strict";
/*
 * name - number
 * duration - number
 * edcuator - string
*/
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration, edcuator }) {
        console.log(name, duration, edcuator);
    }
}
exports.default = new CreateCourseService;
