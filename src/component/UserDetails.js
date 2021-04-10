import React, { Component } from 'react';
import axios from 'axios';

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      //   usersMailId:["a@gmail.com","b@gmail.com","c@gmail.com"]
      usersMailId: [{
        email: "a",
        gender: "famale",
        // details: {
        //   fname: "vinoth",
        //   lname: "kumar"
        // }
      },
      {
        email: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
        gender: "famale"
      },
      {
        email: "a",
        gender: "famale"
      },
      {
        mail: "a",
        gender: "famale"
      }]
    };
  }

  showAllMailId = () => {
    axios.get('https://randomuser.me/api/?results=5').then(resp => {
      console.log(resp);
      this.setState({ usersMailId: resp.data.results })
    });
    alert("hi");
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10').then(resp => {
      console.log(resp);
      this.setState({ usersMailId: resp.data.results })
    });
  }

  render() {
    console.log("i am from render");
    return (
      <div>
        <button onClick={this.showAllMailId} > Fire server data ! </button>
        {this.state.usersMailId.map((item, index) => {
          return (
            <div>
              <p>{item.phone}</p>
              {/* <p>{item.details.fname} {item.details.lname} </p> */}
              <p id={index} > {item.email} </p>
              <p>{item.gender}</p>
            </div>
          )
        })}
      </div>
    );
  }

}
export default UserDetails;

