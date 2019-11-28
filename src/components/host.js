import React, {Component} from 'react';
import axios from "axios";

export default class host extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            hostName:"",
            email:"",
            phone:""
        }
    }

    

    onChangeHostName(e){
        this.setState({
            hostName: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    onChangePhone(e){
        this.setState({
            phone:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const host = {
            hostName : this.state.hostName,
            email : this.state.email,
            phone : this.state.phone
        }

        console.log(host);

        //window.location = "/";

        axios.post("http://localhost:5000/host/add",host)
        .then(res => console.log(res.data));
        
    }
    render(){
        return(
            <div>
               <h3>Host Information</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Host Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.hostName}
                onChange={this.onChangeHostName}
                />
          </div>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group"> 
            <label>Phone Number: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangePhone}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
            </div>
        )
    }
}