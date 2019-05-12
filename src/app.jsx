import React, { Component } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import ProgressBar from "./components/ProgressBar";
import LineChart from "./components/LineChart";
import Table from "./components/Table";
import styles from "./themes/theme.scss";
import BarChart from "./components/BarChart";

const ThemeContext = React.createContext("light");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };

    this.onPercentageChange = this.onPercentageChange.bind(this);
  }

  onPercentageChange = () => {
    if (this.state.percentage === 100) return;
    this.setState({ percentage: this.state.percentage + 20 });
  };

  render() {
    const data = {
      headers: ["Day", 1, 2, 3, 4],
      values: [
        ["Push Ups", 20, 50, 55, 51],
        ["Design System", 8, 2, 3, 1],
        ["Calorie Deficit", `✅`, `✅`, `🙅‍`, `🙅‍`],
        ["8 Hours Sleep", `✅`, `✅`, `✅`, `✅`],
        ["Glass of Water", `🙅‍`, `✅`, `✅`, `✅`],
        ["Industry Article", `✅`, `✅`, `✅`, `🙅‍`],
        ["Learn a Ruby Concept", `✅`, `✅`, `✅`, `🙅‍`]
      ]
    };

    const items = [
      {
        name: "First Item",
        url: "/"
      },
      {
        name: "First Item",
        url: "/"
      },
      {
        name: "First Item",
        url: "/"
      }
    ];

    return (
      <ThemeContext.Provider value="dark">
        <Layout>
          <Navigation action items={items} />
        </Layout>
        <Layout>
          <Table data={data} />
        </Layout>
        <Layout>
          <BarChart />
        </Layout>
      </ThemeContext.Provider>
    );
  }
}

export default App;
