import {actionType, DIV, MULT, numberReducer, SUB, SUM} from './task';


test('Reducer SUM', () => {
    let action: actionType = {
        type: SUM, num: 6
    }
    expect(numberReducer(10, action)).toBe(16)
});

test('Reducer SUB', () => {
    let action: actionType = {
        type: SUB, num: 6
    }
    expect(numberReducer(10, action)).toBe(4)
});

test('Reducer MULT', () => {
    let action: actionType = {
        type: MULT, num: 6
    }
    expect(numberReducer(10, action)).toBe(60)
});

test('Reducer DIV', () => {
    let action: actionType = {
        type: DIV, num: 2
    }
    expect(numberReducer(10, action)).toBe(5)
});