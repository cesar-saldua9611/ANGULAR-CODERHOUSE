import { Grade } from "./gradeEnum";

export class Alumn {
    private name: string;
    private surname: string;
    private age: number;
    private grade: Grade;
    private finalGrade: number;

    constructor(name: string, surname: string, age: number, grade: Grade, finalGrade: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.grade = grade;
        this.finalGrade = finalGrade;
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
        return this.grade;
    }

    getFinalGrade() {
        return this.finalGrade;
    }

    getFullname() {
        return this.name + ' ' + this.surname;
    }
}