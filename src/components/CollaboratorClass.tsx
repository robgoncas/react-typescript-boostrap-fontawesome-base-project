import React from 'react';

interface IProps{};

interface IState{
    name: string;
    age: number;
    title: string;
};

export class CollaboratorClass extends React.Component<IProps,IState>{

    constructor(props:IProps){
        super(props);
        this.state = {
            name:'Roberth',
            age: 32,
            title: 'React Developer'
        } as IState
    }
    render(){

        let {name, age, title} = this.state;

        return(
            <React.Fragment>
                <h3>Collaborator Class Component 1 Accesing way to the state</h3>
                <ul className="list-group">
                    <li className="list-group-item">Name: {this.state.name}</li>
                    <li className="list-group-item">Age: {this.state.age}</li>
                    <li className="list-group-item">Title: {this.state.title}</li>
                </ul>

                <h3 className="mt-4">Collaborator Class Component 2nd Accesing way to the local state variable</h3>
                <ul className="list-group">
                    <li className="list-group-item">Name: {name}</li>
                    <li className="list-group-item">Age: {age}</li>
                    <li className="list-group-item">Title: {title}</li>
                </ul>
            </React.Fragment>
        );

}
}