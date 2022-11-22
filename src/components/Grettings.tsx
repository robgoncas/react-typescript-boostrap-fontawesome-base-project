import React, {useState} from 'react';

interface IProps {}

interface IState{
    message: string;
}

let Grettings:React.FC<IProps> = () => {

    let[state, setState] = useState<IState>({
        message: 'Hello'
    });

    let changeMessage = (greet:string):void => {
        setState(
            {
                message: greet
            }
        );
    };


    return(
        <React.Fragment>
            <h3>Greetings Component</h3>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="display-3 text-dark">{state.message}</div>
                                <button className="btn btn-success m-2" onClick={()=> changeMessage('Good Morning')}>Good Morning</button>
                                <button className="btn btn-success m-2" onClick={()=> changeMessage('Good Afternoon')}>Good Afternoon</button>
                                <button className="btn btn-success m-2"  onClick={()=> changeMessage('Good Evening')}>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );

}

export default Grettings;