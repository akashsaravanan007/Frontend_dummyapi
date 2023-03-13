import React from "react";
import "./layout.css";
import Table from "./Task";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Company Name. All Rights Reserved.</p>
    </footer>
  );
};

export default function Layout() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Welcome to my website!</h1>
        <p>This is some sample content.</p>
      </main>
      <Table />
      <Footer />
    </div>
  );
}
