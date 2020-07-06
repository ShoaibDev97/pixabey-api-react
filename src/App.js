import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./component/search/Search.jsx";
export class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Navbar />
            <Search />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
