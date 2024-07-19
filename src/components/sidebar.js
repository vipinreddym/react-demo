import React, { Component } from 'react';
import './SideBar.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      menuItemsBottom: [],
    }
  }

  handleClick = (index) => {
    if(this.state.menuItems[index].subSetions != undefined){
      // alert(this.state.menuItems[index].subSetions);
      console.log(this.state.menuItems[index].subSetions.length);
    }
  }

  componentDidMount = () => {
    this.setState({menuItems: this.props.menuItems ? this.props.menuItems : [] });
    this.setState({menuItemsBottom: this.props.menuItemsBottom ? this.props.menuItemsBottom : [] });
  }

  render() {
    return (
      <nav>
        <div className="sidebar-mainmenu menu-top">
          <div className="sidebar-mainmenu-item">
            {this.state.menuItems.map((item, index) => {
              
              return <span key={ index }>
                {/* <FontAwesomeIcon icon={item.icon} /> */}
                </span>
            })}
          </div>
          <div className="mainmenu-details">
            {this.state.menuItems.map((item, index) => {
              return <div className="sidebar-submenu-item" key={ index }  onClick={() => this.handleClick(index)}>
                <span className="menu-icon">
                  {/* <FontAwesomeIcon icon={item.icon} /> */}
                  </span>
                <span>{item.label}</span>

                {item.subSetions !== undefined &&
                    <div className="submenu-details">
                    {item.subSetions.map((item, index) => {
                      return <div className="sidebar-child-item" key={ index } href="#">{item} 
                      </div>;
                    })}
                  </div>
                }
              </div>;
            })}
          </div>
        </div>

        <div className="sidebar-mainmenu menu-bottom">
          <div className="sidebar-mainmenu-item">
            {this.state.menuItemsBottom.map((item, index) => {
              return <span>
                {/* <FontAwesomeIcon icon={item.icon} /> */}
                </span>
            })}
          </div>
          <div className="mainmenu-details menu-bottom-details">
            {this.state.menuItemsBottom.map((item, index) => {
              return <div className="sidebar-submenu-item" key={ index }  onClick={() => this.handleClick(index)}>
              <span className="menu-icon">
                {/* <FontAwesomeIcon icon={item.icon} /> */}
                </span>
              <span>{item.label}</span>
              {item.subSetions !== undefined &&
                <div className="submenu-details">
                  {item.subSetions.map((item, index) => {
                    return <div className="sidebar-child-item" key={ index } href="#">{item} 
                    </div>;
                  })}
                </div>
              }
              </div>;
            })}
          </div>
        </div>
      </nav>
    );
  };
}

export default SideBar;