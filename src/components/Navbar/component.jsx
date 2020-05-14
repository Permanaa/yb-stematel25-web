import React, { useState } from 'react';
import './style.css';
import IMAGES from '../../config/images';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  NavItem,
  NavLink
} from 'reactstrap';
import firebase from 'firebase'

const Navigationbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const firebaseConfig = {
    apiKey: "AIzaSyANeDhtG8IwdQ5pj8YN_UfSFbgywxIynwQ",
    authDomain: "yb-stematel25.firebaseapp.com",
    databaseURL: "https://yb-stematel25.firebaseio.com",
    projectId: "yb-stematel25",
    storageBucket: "yb-stematel25.appspot.com",
    messagingSenderId: "645018167819",
    appId: "1:645018167819:web:f01b615d26f225d224f50e",
    measurementId: "G-7NB4GCCMT8"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const provider = new firebase.auth.GoogleAuthProvider();

  const [user, setUser] = useState([])

  const onBtnLoginClick = () => {
    firebase.auth().signInWithPopup(provider).then((res) => {
      setUser({user: res.user})
    }).catch((err) => {
      console.log(err)
    })
  }

  const onBtnLogoutClick = () =>{
    firebase.auth().signOut().then((res) => setUser({ user : [] }))
    .catch((err) => console.log(err))
  }
  
  return (
    <section>
      <nav>
        <div className="content d-flex">
          <div className="jurusan-title-wrapper">
            <h4>RPL25</h4>
          </div>
          <button onClick={toggle} className="toggle-nav-wrapper">
              <img src={IMAGES.toggleNav} alt=""/>
          </button>
        </div>
      </nav>
      <Collapse isOpen={isOpen} navbar className="nav-2">
        <div className="container">
          <NavItem className="navbar-wrapper">
            <NavLink tag={RRNavLink} exact to="/" onClick={toggle}><img className="mb-3" src={IMAGES.home} alt=""/></NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/impression" onClick={toggle}>Pesan dan Kesan</NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/teacher" onClick={toggle}>Daftar Guru</NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/student" onClick={toggle}>Daftar Siswa</NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/video" onClick={toggle}>Tentang Kami</NavLink>
          </NavItem>
          {user.length == 0 ?
            <NavItem className="navbar-wrapper">
              <NavLink className="navbar-link" tag={RRNavLink} exact to="/" onClick={onBtnLoginClick}>Login</NavLink>
            </NavItem> 
          : 
            <NavItem className="navbar-wrapper">
              <NavLink className="navbar-link" tag={RRNavLink} exact to="/" onClick={onBtnLogoutClick}>Logout</NavLink>
              <NavLink className="navbar-link" tag={RRNavLink} exact to="/">{user.user.displayName}</NavLink>
            </NavItem>
         }
        </div>
      </Collapse>
    </section>
  );
}

export default Navigationbar;