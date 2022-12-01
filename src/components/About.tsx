import React, { useState } from 'react';

interface IProps{}
interface IState{
}


let About:React.FC = () => {

    let[state, setState] = useState<IState>({
        count: 0
    });
    return(
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                    <h3 className="h3 fw-bold text-success">About Us</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        If you like it follow me : https://www.linkedin.com/in/robgoncas/ , have a good one!
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default About;