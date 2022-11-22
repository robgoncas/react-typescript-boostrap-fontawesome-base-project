import React from 'react';
import logo from './logo.svg';
//Components
import './App.css';
import Customer from './components/Customer';
import Collaborator from './components/Collaborator';
import Counter from './components/Counter';

//Classes
import {CustomerClass} from './components/CustomerClass';
import {CollaboratorClass} from './components/CollaboratorClass';




function App() {
  return (
    <div className="App App-header">
      <div className="container">
      <div className="row ">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-warning">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <i className="fa fa-home fa-3x mb-3"></i>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <div className="row">
          <div className="col">
            <Customer
              name={'Roberto González'}
              age={3.2}
              title={'Software Engineer'}
            />
               <Customer
              name={'Karem González'}
              age={2.9}
              title={'Architecture Modeler'}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <CustomerClass
              name={"Roberto González"}
              age={32}
              title={"React Developer"}
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <Collaborator/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <CollaboratorClass>
            </CollaboratorClass>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <Counter/>
          </div>
        </div>
       
      </div>


    </div>
  );
}

export default App;
