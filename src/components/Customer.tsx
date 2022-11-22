import React from "react";

interface IProps{
    name : string;
    age : number;
    title : string;
}


let Customer:React.FC<IProps> = ({name , age , title}) => {
    console.log(name, age, title);
    return (
       <React.Fragment>
           Costumer Component / Componente Cliente
           <ul className="list-group">
                <li className="list-group-item">
                    Name: {name}
                </li>
                <li className="list-group-item">
                    Age: {age}
                </li>
                <li className="list-group-item">
                    title: {title}
                </li>

           </ul>

       </React.Fragment> 
    )
};

export default Customer;