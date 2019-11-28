import React, {Component} from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
//import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
//import "react-datetime-picker/dist/react-datetime-picker.css";

export default class guest extends Component {
    
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCheckIn = this.onChangeCheckIn.bind(this);
        this.onChangeCheckOut = this.onChangeCheckOut.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeHostPhone = this.onChangeHostPhone.bind(this);
        this.onChangeHostEmail = this.onChangeHostEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name:"",
            email:"",
            phone:"",
            hostName:"",
            hostEmail:"",
            hostPhone:"",
            checkIn:"",
            checkOut:"",
            address:"",
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

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }

    onChangeCheckIn(date){
        this.setState({
            checkIn:date
        })
    }

    onChangeCheckOut(date){
        this.setState({
            checkOut:date
        })
    }

    onChangeAddress(e){
        this.setState({
            address:e.target.value
        })
    }

    onChangeHostPhone(e){
        this.setState({
            hostPhone:e.target.value
        })
    }

    onChangeHostEmail(e){
        this.setState({
            hostEmail:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const guest = {
            hostName : this.state.hostName,
            email : this.state.email,
            phone : this.state.phone,
            name : this.state.name,
            address : this.state.address,
            checkIn : this.state.checkIn,
            checkOut : this.state.checkOut,
            hostPhone : this.state.hostPhone,
            hostEmail : this.state.hostEmail
        }

        console.log(guest);

        //window.location = "/";

        axios.post("http://localhost:5000/entry/add",guest)
        .then(res => console.log(res.data));
        
    }

    render(){
        return(
            <div>
                <h3>Guest Information</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="email"
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
                pattern="[0-9]{10}"
                value={this.state.phone}
                onChange={this.onChangePhone}
                
                />
          </div>
          <div className="form-group"> 
            <label>Check In Time: </label>
            <DatePicker
              selected={this.state.checkIn}
              onChange={this.onChangeCheckIn}
              showTimeSelect
              minDate={new Date()}
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            {/* <input  type="text"
                required
                className="form-control"
                value={this.state.checkIn}
                onChange={this.onChangeCheckIn}
                /> */}
          </div>
          <div className="form-group"> 
            <label>Check Out Time: </label>
            <DatePicker
              selected={this.state.checkOut}
              onChange={this.onChangeCheckOut}
              showTimeSelect
              minDate={this.state.checkIn}
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
            />
            {/* <input  type="text"
                required
                className="form-control"
                value={this.state.checkOut}
                onChange={this.onChangeCheckOut}
                /> */}
          </div>
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
            <label>Host Email: </label>
            <input  type="email"
                required
                className="form-control"
                value={this.state.hostEmail}
                onChange={this.onChangeHostEmail}
                />
          </div>
          <div className="form-group"> 
            <label>Host Phone Number: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.hostPhone}
                onChange={this.onChangeHostPhone}
                pattern="[0-9]{10}"
                />
          </div>
          <div className="form-group"> 
            <label>Address: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
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