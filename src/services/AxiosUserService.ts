import axios from 'axios';

export class AxiosUserService{
    private static serverURL:string ='https://jsonplaceholder.typicode.com';

    public static getAllUsers(){
        let dataURL:string = this.serverURL+"/users";
        return axios.get(dataURL);
    }

    public static getUserDetails(userId: string){
        let dataURL:string = `${this.serverURL}/users/${userId}`;
        return axios.get(dataURL);
    }
}