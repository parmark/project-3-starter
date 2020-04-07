import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class Secret extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: ""
  }

  componentDidMount() {
    API.Forms.getAll(this.context.authToken)
      .then(response => response.data)
      .then(forms => this.setState({ forms }))
      .catch(err => {
        if (err.response.status === 401) {
          return this.setState({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div className='Form'>
        <div className='row'>
          <div className='col'>
            {this.state.isLoading
              ? <div className='alert alert-success'>Loading...</div>
              : this.state.error
                ? <div className='alert alert-danger'>{this.state.error}</div>
                : <div>
                  <p>Galleries</p>
                  <p><em>{this.state.forms[0].Name}</em></p>
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
