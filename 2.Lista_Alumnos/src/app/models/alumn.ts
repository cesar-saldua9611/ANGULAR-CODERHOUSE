import { Grade } from "./gradeEnum";

export class Alumn {
    private name: string;
    private surname: string;
    private age: number;
    private grade: Grade;

    constructor(name: string, surname: string, age: number, grade: Grade) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.grade = grade;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getAge() {
        return this.age;
    }

    getGrade() {
        return this.grade.toString();
    }

    getFullname() {
        return this.name + ' ' + this.surname;
    }
}