import React from "react";

interface IProps {
    name: string;
    age:number;
    title:string;
}
interface IState {}

// like a normal class
export class CustomerClass extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h3>Customer Class Component</h3>
        <ul className="list-group">
            <li className="list-group-item">
                Name: {this.props.name}
            </li>
            <li className="list-group-item">
                Age: {this.props.age}
            </li>
            <li className="list-group-item">
                title: {this.props.title}
            </li>

        </ul>
      </React.Fragment>
    );
  }
}
