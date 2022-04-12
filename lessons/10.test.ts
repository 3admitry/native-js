import {changeUserAdress, changeUserLaptop, userType} from './10';

let user:userType;

beforeEach(()=>{
    user = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Brest',
            house: 69
        },
        laptop: {
            title: 'Asus'
        }
    }
})


test('Shallow testing - changeUserAdress', ()=>{
    let copyUser = changeUserAdress(user,'Kiev');

    expect(user).not.toBe(copyUser);
    expect(copyUser.address.city).toBe('Kiev');
    expect(user.laptop).toBe(copyUser.laptop);
})


test('Shallow testing - changeUserLaptop', ()=>{
    let copyUser = changeUserLaptop(user,'MacBook');

    expect(user).not.toBe(copyUser);
    expect(user.laptop).not.toBe(copyUser.laptop);
    expect(user.address).toBe(copyUser.address);
    expect(copyUser.laptop.title).toBe('MacBook');

})


