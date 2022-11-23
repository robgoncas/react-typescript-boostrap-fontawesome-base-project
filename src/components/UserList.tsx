import React, {useState} from 'react';
import {IListUser} from "../models/IListUser";
import {UserService} from "../services/UserService";

interface IState{
    users: IListUser[]
}

interface IProps{
}

let UserList:React.FC<IProps> = () =>{

    let[state, setState] = useState<IState>({
        users: UserService.getAllUsers()
    });

    return(
        <React.Fragment>
        <pre>{JSON.stringify(state.users)}</pre>
        <div className="container">
            <div className="row">
                <div className="col">
                <h3>List Users</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <table className="table table-striped-text-center-table-over">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.users.length > 0 &&
                            state.users.map(user =>{
                                return(
                                    <tr className="text-white"
                                    key={user.sno}>
                                        <td>{user.sno}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age} yo.</td>
                                        <td>{user.designation}</td>
                                        <td>{user.company}</td>
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

    );
};

export default UserList;