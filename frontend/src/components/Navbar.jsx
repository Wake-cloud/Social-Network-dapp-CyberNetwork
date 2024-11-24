import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Navbar.css";  // For custom styling

const Navbar = ({ connectWallet }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Cyberpunk Network</h2>
      </div>
      <div className="navbar-links">
        {/* Links corresponding to the routes */}
        <Link to="/" className="navbar-btn">Home</Link>
        <Link to="/create-profile" className="navbar-btn">Create Profile</Link>
        <Link to="/upload-post" className="navbar-btn">Post it</Link>
        <Link to="/posts" className="navbar-btn">See Posts</Link>
        <Link to="/send-message" className="navbar-btn">Send Message</Link>

        {/* Wallet connection button */}
        <button onClick={connectWallet} className="navbar-btn">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
