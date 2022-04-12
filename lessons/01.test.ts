import {mult, splitIntoWord, sum} from './01';

test('sum must be correct',()=>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result = sum(a,b);

    //expect result
    expect(result).toBe(3);
})
test('mult must be correct',()=>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result = mult(b,c);

    //expect result
    expect(result).toBe(6);
})

test('Splitting sentencies',()=>{
    //data
    const str1 = "Hello my dear friends";

    //action
    const result = splitIntoWord(str1);

    //expect result
    expect(result.length).toBe(4);
    expect(result[0]).toBe('Hello');

})