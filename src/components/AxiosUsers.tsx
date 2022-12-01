import React, {useEffect, useState} from 'react';
import {IAxiosUser} from "../models/IAxiosUser";
import {AxiosUserService} from "../services/AxiosUserService";
import {Link} from 'react-router-dom';


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
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h3 className="h3 fw-bold text-success">Users from Axios Query</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum saepe, laudantium obcaecati eaque iste repellendus enim temporibus ad excepturi quia eum culpa iusto quidem recusandae? Officia ut voluptate voluptatibus maxime.
                        Libero omnis est, esse, saepe veniam unde quidem delectus aspernatur recusandae velit alias quaerat! Obcaecati nesciunt dolores magnam, itaque libero, maiores voluptatibus ullam hic molestiae saepe odit enim sunt cum.
                        Accusamus iste sequi accusantium atque reprehenderit rerum nihil, veritatis odio deserunt deleniti numquam magnam nulla earum, rem officiis consequuntur esse tempora voluptates corporis illum hic omnis autem. Impedit, inventore nobis.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-over text-center text-dark">
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
                                                {/* <td>{user.id}</td> */}
                                                <td>
                                                    <Link to={'/AxiosUsers/detail/'+user.id} className="text-decoration-none text-success fw-bold" >{user.name}</Link>
                                                </td>
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
