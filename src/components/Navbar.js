import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/connect">Connect</a></li>
      </ul>
    </div>
  );
}