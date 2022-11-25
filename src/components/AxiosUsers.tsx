import React, {useEffect, useState} from 'react';
import {IAxiosUser} from "../models/IAxiosUser";
import {AxiosUserService} from "../services/AxiosUserService";


interface IProps{} 
interface IState{
    loading: boolean;
    users : IAxiosUser [];
    errorMessage : string;
} 

let AxiosUsers:React.FC<IProps> = () => {

    let [state, setState] = useState<IState>({
        loading: false,
        users: [] as IAxiosUser[],
        errorMessage:''
    });

    useEffect(()=>{
        setState({...state, loading:true});
        AxiosUserService.getAllUsers().then((response)=>{
            console.log(response)
            setState({
                ...state,
                loading:false,
                users: response.data
            })
        }).catch((error)=>{
            console.log('take a look to your axios package or internet connection'+ error.message)
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        });
    },[]);
       

let {loading, users, errorMessage} = state;

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Users from Axios Query</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-over text-center text-white">
                            <thead className="bg-success">
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Company</th>
                                <th>Website</th>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 && users.map(user =>{
                                        return(
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default AxiosUsers;
