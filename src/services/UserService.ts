import {IListUser} from "../models/IListUser"

export class UserService{
    private static users : IListUser[] =[
        {
            sno: 'COD45EE',
            name: 'Camilo',
            age: 32,
            designation: 'React Developer',
            company: 'Montreal Company'
        },
        {
            sno: 'COF45ED',
            name: 'Juan',
            age: 41,
            designation: 'React Senior Dev',
            company: 'Ottawa Company'
        },
        {
            sno: 'COK45EE',
            name: 'Claudio',
            age: 27,
            designation: 'React Team Leader',
            company: 'Valparaíso Company'
        }
    ];

    public static getAllUsers(){
        return this.users;
    }
}