import React from "react";

import { Cards, Chart, CountryPicker } from "./components";

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
      </div>
    );
  }
}

export default App;
