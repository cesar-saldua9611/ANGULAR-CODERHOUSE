import { Course } from "../models/course";

export class CoursesData {
    static courses: Course[] = [
        {
            id: 1,
            name: 'Angular',
            teacher: 'Ricardo Martinez',
            startDate: new Date(2022, 09, 1),
            endDate: new Date(2022, 11, 30),
            isOpen: true
        },
        {
            id: 2,
            name: 'ASP.NET',
            teacher: 'Guillermo Padilla',
            startDate: new Date(2022, 09, 1),
            endDate: new Date(2022, 11, 30),
            isOpen: true
        },
        {
            id: 3,
            name: 'SQL Server',
            teacher: 'Adriana Herrera',
            startDate: new Date(2022, 09, 1),
            endDate: new Date(2022, 11, 30),
            isOpen: true
        }
    ]
}