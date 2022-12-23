// import React, { Component } from "react";
// import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
// import { NavLink } from 'react-router-dom';

// class Header extends Component {
//     constructor(props){
//         super(props) ; 
//         this.state = {
//             isNavOpen: false
//         }
//         this.toggleNav = this.toggleNav.bind(this) ; 
//     }

//     toggleNav(){
//         this.setState({
//             isNavOpen: !this.state.isNavOpen
//         });
//     }

//     render() {
//         // <>  == React.Fragment ?
//         return (
//             <>
//                 <Navbar dark expand="md">
//                         <NavbarToggler onClick={this.toggleNav} />
//                         <NavbarBrand className="me-auto" href="/" style={{marginLeft:'50px'}} >
//                             <img src="assets/images/logo.png" alt="Logo-Mukbag" height="30" width="41" />
//                         </NavbarBrand>
//                         <Collapse navbar isOpen={this.state.isNavOpen}>
//                             <Nav navbar>  
//                                 <NavItem>
//                                     <NavLink className="nav-link" to="/home">
//                                         <span className="fa fa-home fa-lg"></span>Home
//                                     </NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink className="nav-link" to="/nhanvien">
//                                         <span className="fa fa-users fa-lg"></span>Nhân viên
//                                     </NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink className="nav-link" to="/phongban">
//                                         <span className="fa fa-id-card-o fa-lg"></span>Phòng ban
//                                     </NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink className="nav-link" to="/tienluong">
//                                         <span className="fa fa-money fa-lg"></span>Tiền lương
//                                     </NavLink>
//                                 </NavItem>
//                             </Nav>
//                         </Collapse>
//                 </Navbar>
//             </>
//         );
//     }
// }

// export default Header; 

//
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(prop) {
        super(prop);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="me-auto" href="/" style={{ marginLeft: '50px' }} >
                            <img src="assets/images/logo.png" alt="Logo-Mukbag" height="30" width="41" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/safft'><span className="fa fa-group fa-lg"></span>Nhân viên</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/department'><span className="fa fa-address-card fa-lg"></span> Phòng ban</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/salary'><span className="fa fa fa-money fa-lg"></span> Bảng lương</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/StoreDishes'><span className="fa fa fa-money fa-lg"></span>Store Dishes</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>

            </React.Fragment>
        );
    }
}

export default Header;