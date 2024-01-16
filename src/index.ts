import axios from "axios";
import { Student } from "./models/Student";

const student = new Student({id : 'b3ba'});

student.set({name: 'Hello', age: 22234});

student.save();