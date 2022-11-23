import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="liveinport_box">
        <a href="/">Live in Porto!</a>
      </div>
      <div className="navbar_corner">
        <a className="navbar_conrner__links" href="/">Home</a>
        <a className="navbar_conrner__links" href="/about">About</a>
        <a className="navbar_conrner__links" href="/connect">Connect</a>
      </div>
    </div>
  );
}

