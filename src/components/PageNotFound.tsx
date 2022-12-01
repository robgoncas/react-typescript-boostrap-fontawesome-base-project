import React, { useState } from 'react';

interface IProps{}
interface IState{
}


let PageNotFound:React.FC = () => {

    let[state, setState] = useState<IState>({
        count: 0
    });
    return(
        <React.Fragment>
        <h3>PageNotFound Component</h3>
        </React.Fragment>

    )
}

export default PageNotFound;