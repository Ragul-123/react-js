import React, { Component } from 'react';
import axios from 'axios';

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''   
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email } = this.state;

    const employee = {
        email
    };

    axios.post('http://localhost:9000/delete', employee,function (req,res) {
          console.log(res)
      })

  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Delete;