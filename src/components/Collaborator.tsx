import React from 'react';
import {useState} from 'react';
interface IProps{}
interface IState{
    name: string;
    age: number;
    title: string;
}

let Collaborator:React.FC<IProps> = () =>{

    //setting up the state managing
    let[state, setState]= useState<IState>({
        name: 'Roberto González C.',
        age: 32,
        title: 'React Collaborator'
    });


    return(
      <React.Fragment>
          <h3>Collaborator Class Component</h3>
          <ul className="list-group">
              <li className="list-group-item">
                    Name: {state.name}
              </li>
              <li className="list-group-item">
                    Age: {state.age}
              </li>
              <li className="list-group-item">
                    title: {state.title}
              </li>
          </ul>
      </React.Fragment> 

    )
};

export default Collaborator;