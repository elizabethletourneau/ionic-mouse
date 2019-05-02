
import React, { Component } from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Navigation from './components/Navigation';
import Layout from './components/Layout';

class App extends Component {



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
            <div>
                <Layout>
                    <Navigation action items={items} ></Navigation>
                </Layout>
                <Layout>
                    <div>
                    <Heading>My Heading</Heading>
                    <Button>Button</Button>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default App;

