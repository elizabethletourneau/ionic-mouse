
import React, { Component } from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import ProgressBar from './components/ProgressBar';
import LineChart from './components/LineChart';
import Table from './components/Table';
import styles from "./themes/theme.scss";

const ThemeContext = React.createContext('light');

class App extends Component {
    constructor(props){
        super(props)
    this.state = {
        percentage: 0,
    }

    this.onPercentageChange = this.onPercentageChange.bind(this);
}

    onPercentageChange = () => {
        if (this.state.percentage === 100) return
        this.setState({ percentage: this.state.percentage + 20 });
    };




    render() {

        const data = {
                headers: ["Day"],
                values: [["Push Ups", 20], ["Design System", 8], ['Calorie Deficit', `✅`]]
              };

           const data2 = {
             headers: ["Day", 1],
             values: [
               ["Pull Ups"],
               ["Design System", 8],
               ["Calorie Deficit", `✅`]
             ]
           };


        const items = [
            {
                name: 'First Item',
                url: '/',
            },
            {
                name: 'First Item',
                url: '/',
            },
            {
                name: 'First Item',
                url: '/',
            },
        ];

        return (
          <ThemeContext.Provider value="dark">
            <Layout>
              <Navigation action items={items} />
            </Layout>
            <Layout>
              <Table data={data} />
            </Layout>
          </ThemeContext.Provider>
        );
    }
}



export default App;

