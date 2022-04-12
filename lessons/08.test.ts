import React from 'react';

type usersObjType = {
    [key: string]: { id: number, name: string }
}
let users:usersObjType

beforeEach(() => {
     users = {
        '100': {id: 100, name: 'Max'},
        '123': {id: 123, name: 'Vanya'},
        '111': {id: 111, name: 'Dasha'},
        '1': {id: 1, name: 'Dima'},
    }
})

test('Simple test to Native JS', () => {
    users['1'].name = 'Oleg'
    expect(users['1'].name).toBe('Oleg')

})