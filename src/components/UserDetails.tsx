import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { IAxiosUser } from "../models/IAxiosUser";
import { AxiosUserService } from "../services/AxiosUserService";

interface URLParams {
  id: string;
}

interface IProps {}
interface IState {
  loading: boolean;
  user: IAxiosUser;
  errorMessage: string;
}

let UserDetails: React.FC = () => {
  let { id } = useParams<URLParams | any>();

  let [state, setState] = useState<IState>({
    loading: false,
    user: {} as IAxiosUser,
    errorMessage: "",
  });

  useEffect(() => {
    if (id) {
      setState({ ...state, loading: true });

      AxiosUserService.getUserDetails(id)
        .then((response) => {
          console.log(response.data);
          setState({
            ...state,
            loading: false,
            user: response.data,
          });
        })
        .catch((error) => {
          setState({
            ...state,
            loading: false,
            errorMessage: error.message,
          });
        });
    }
  }, [id]);
  let { loading, user, errorMessage } = state;

  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h3 className="text-success fw-bold">User Details Page</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus provident totam voluptatum, ea ipsam laboriosam itaque
              facere repellendus ab nulla dolorem ducimus, delectus libero unde
              voluptatem expedita, soluta quaerat cupiditate. Harum facilis
              voluptatibus repellendus ab? Deleniti libero et aut omnis
              aspernatur quis quibusdam sint saepe, culpa molestias dignissimos
              at eius perspiciatis numquam incidunt atque cum accusamus aliquid
              quos consectetur similique!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(user).length > 0 && (
              <div className="row">
                <div className="col">
                  <ul className="list-group">
                    <li className="list-group-item">
                        Name: <p className="fw-bold">{user.name}</p>
                    </li>
                    <li className="list-group-item">
                        Phone Number: <p className="fw-bold">{user.phone}</p>
                    </li> <li className="list-group-item">
                        Email: <p className="fw-bold">{user.email}</p>
                    </li> <li className="list-group-item">
                        Company: <p className="fw-bold">{user.company.name}</p>
                    </li> <li className="list-group-item">
                        Location: <p className="fw-bold">{user.address.city}</p>
                    </li>
                    <li className="list-group-item">
                        Zip: <p className="fw-bold">{user.address.zipcode}</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="row">
                <div className="col">
                    <Link  to={'/'} className="btn btn-success mt-4">Back</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
