import { Course } from "./course";
import { Student } from "./student"

export interface Inscription {
    id: number,
    student: string;
    course: string;
}