import React, { Component } from 'react';
import styles from './Line.scss';
import { CSSTransitionGroup } from 'react-transition-group';

class Line extends Component {
    constructor(props) {
        super(props);
        this.state = { items: ['hello', 'world', 'click', 'me'] };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
        ]);
        this.setState({ items: newItems });
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({ items: newItems });
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div className={styles.example} key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionEnter={true}
                    transitionLeave={false}>
                    <h1>Fading at Initial Mount</h1>
                    {items}
                </CSSTransitionGroup>
            </div>
        );
    }
}
export default Line;