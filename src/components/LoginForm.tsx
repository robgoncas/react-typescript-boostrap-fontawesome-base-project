
import React, {useState} from 'react';
import {IUser} from '../models/IUser';

interface IProps {}
interface IState{
    user: IUser
}

let LoginForm:React.FC<IProps> = () => {

    let[state, setState] = useState<IState>({
        user: {
            username: '',
            password: ''
        }
    });

    let updateInput = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setState({
            user:{
                ...state.user,
                [event.target.name] : event.target.value
            }
        })
    };

    let login = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log(state.user);
    };

    return(
        <React.Fragment>
            <pre>{JSON.stringify(state.user)}</pre>
            <h3>Login Component</h3>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <p className="h4">Login here</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={login}>
                                    <div className="mb-2">
                                        <input name="username" value={state.user.username} onChange={updateInput} type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="mb-2">
                                        <input name="password" value={state.user.password} onChange={updateInput} type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>     
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default LoginForm;