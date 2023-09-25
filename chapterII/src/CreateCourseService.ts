/*
 * name - number
 * duration - number
 * edcuator - string
*/

interface Course {
    name: string;
    duration?: number; 
    edcuator: string;
}


class CreateCourseService {
    execute({name, duration, edcuator}: Course) {
        console.log(name, duration, edcuator);
    }
}

export default new CreateCourseService;