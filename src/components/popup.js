import React, { Component } from 'react';
import { render } from 'react-dom';
// import SideBar from './SideBar';
import { faHome,faCog,faUserPlus,faSignOut } from "@fortawesome/free-solid-svg-icons";
import SideBar from './sidebar';
// import React, { useState } from "react";
import './style.css';

class popup extends Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          label: "DashBoard",
          icon: faHome,
          subSetions:["DashBoard1","DashBoard2","DashBoard3","DashBoard4"]
        },
        {
          label: "Content",
          icon: faHome,
          subSetions:["Content1","Content2","Content3"]
        },
        {
          label: "Invite",
          icon: faUserPlus,
        },
        {
          label: "Analytics", 
          icon: faHome,
          subSetions:["Analytics1","Analytics2","Analytics3"]
        },
        {
          label: "Guide",
          icon: faHome,
          subSetions:["Guide1","Guide2","Guide3"]
        },
              
      ],
       menuItemsBottom: [
        {label: "Settings", icon: faCog
        ,
          subSetions:["Settings1","Settings2","Settings3"]
        },
        {label: "Logout", icon: faHome,
        }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <header>Smart Work</header>
        <SideBar menuItems={this.state.menuItems} menuItemsBottom={this.state.menuItemsBottom} />
      </div>
    );
  }

  
}
render(<popup />, document.getElementById('root'));

export default popup;
