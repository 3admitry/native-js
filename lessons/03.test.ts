import { StudentsType } from "./02";
import { addSkill } from "./03";

let students: StudentsType;
beforeEach(()=>{
    students = {
        id: 1,
        name: 'Dmitry',
        age: 23,
        isActive: false,
        address: {
            street: 'Avenu 5',
            city: {
                title: 'Brest',
                cityTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML/CSS'
            },
            {
                id: 2,
                title: 'JS'
            },
            {
                id: 2,
                title: 'Reac'
            }
        ]

    }
})

test('Add skill to student object',()=>{

    addSkill(students, 'PHP');
    expect(students.technologies.length).toBe(4);
    expect(students.technologies[3].title).toBe('PHP');

})