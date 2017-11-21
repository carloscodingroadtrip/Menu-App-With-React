import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

export default class App extends Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        //initial state
        this.state = {
            fishes: {},
            order: {} 
        }
    }

    addFish(fish) {
        //update our state
        const fishes = {...this.state.fishes};
        //add in our new fish
        const timeStamp = Date.now();
        fishes[`fish-${timeStamp}`] = fish;
        //setstate
        this.setState({fishes});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="main">
                    <Header tagline="Fresh seafood market" />
                </div>
                <Order />
                <Inventory addFish= {this.addFish} />
            </div>  
        )
    }
}
