import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "a",
      txtPassword: "b",
      txtDesc: "123",
      sltGender: 0,
      rdLanguage: 'en',
      chkbStatus : true,
    }
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label >Username</label>
                    <input
                      type="text"
                      name="txtName"
                      value={this.state.txtName}
                      className="form-control"
                      placeholder="Input field"
                      onChange={this.onHandleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label >Password</label>
                    <input
                      type="password"
                      name="txtPassword"
                      value={this.state.txtPassword}
                      className="form-control"
                      placeholder="Input field"
                      onChange={this.onHandleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label >Mô tả</label>
                    <textarea
                      name="txtDesc"
                      value={this.state.txtDesc}
                      row="3"
                      className="form-control"
                      placeholder="Input field"
                      onChange={this.onHandleChange}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label >Gioi Tinh</label>
                    <select
                      name="sltGender"
                      className="form-control"
                      value={this.state.sltGender}
                      onChange={this.onHandleChange}>
                      <option value={0} >-- Nu --</option>
                      <option value={1} >-- Nam --</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label >Laguage</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="rdLanguage"
                          id="input"
                          value="vi"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLanguage === 'vi'}
                        />
                          Viet
                      </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          name="rdLanguage"
                          id="input2"
                          value="en"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLanguage === 'en'}
                        />
                          Anh
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label >Status</label>
                    <div className="checkbox">
                      <label>
                        <input 
                        type="checkbox"
                        name="chkbStatus"
                        onChange={this.onHandleChange}
                        value={this.state.chkbStatus}
                        checked ={this.state.chkbStatus} />
                         Active
                      </label>
                    </div>

                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-danger">Clear</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}








export default App;
