export interface Course {
    id: number,
    name: string;
    teacher: string;
    startDate: Date;
    endDate: Date;
    isOpen: boolean;
}