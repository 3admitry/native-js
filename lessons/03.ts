import {StudentsType} from './02'

export const addSkill = (students: StudentsType, skill: string) => {
    students.technologies.push({id: new Date().getTime(), title: skill})
}
