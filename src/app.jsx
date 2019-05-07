
import React, { Component } from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import ProgressBar from './components/ProgressBar';

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
                    <Navigation action items={items} ></Navigation>
                </Layout>
                <Layout>
                    <div>
                    <Heading>My Heading</Heading>
                        <Button onPress={this.onPercentageChange}>Button</Button>
                    </div>
                </Layout>
                <Layout>
                    <ProgressBar percentage={this.state.percentage}/>
                </Layout>
            </ThemeContext.Provider>
        );
    }
}



export default App;

