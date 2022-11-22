import React, { useState } from 'react';

interface IProps{}
interface IState{
    count: number;
}


let Counter:React.FC = () => {

    let[state, setState] = useState<IState>({
        count: 0
    });

    let increment = () => {
        setState(
            {
                count: state.count + 1
            }
        )
    };

    let decrement = () => {
        setState(
            {
                count: state.count - 1
            }
        )
    };

    return(
        <React.Fragment>
        <h3>Counter Component</h3>
        <div className="container">
            <div className="row">
                <div className="col md-4">
                    <div className="card">
                        <div className="car-body">
                            <p className="display-3 text-dark">{state.count}</p>
                            <button className="btn btn-success" onClick={increment}>
                                Increment
                            </button>
                            <button className="btn btn-warning m-1" onClick={decrement}>
                                Decrement
                            </button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </React.Fragment>

    )
}

export default Counter;