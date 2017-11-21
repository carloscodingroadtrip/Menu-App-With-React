import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './fish';
import sampleFishes from '../sample-fishes';

export default class App extends Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
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

    loadSamples() {
        this.setState({fishes: sampleFishes});
    }

    addToOrder(key) {
        //take a copy of our state
        const order =  {...this.state.order};
        //update or add our new order
        order[key] = order[key] +1 || 1;
        //update our state
        this.setState({order});
    }

    render() {   
        return (
            <div className="catch-of-the-day">
                <div className="main">
                    <Header tagline="Fresh seafood market" />
                    <ul className="list-of-fishes">
                       {
                        Object.keys(this.state.fishes)
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish= {this.addFish} loadSamples={this.loadSamples} />
            </div>  
        )
    }
}
