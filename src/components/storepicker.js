import React, { Component } from 'react';
import { getFunName } from '../helpers';
export default class StorePicker extends Component {
    goToStore(event) {
        event.preventDefault();
        console.log('you change the url');
        //grab the text from the box
        console.log(this.storeInput);
        //transition from / to /store/storeId
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
            <h2>Please enter an store:</h2>
            <input ref={(input) => { this.storeInput = input}} type="text" placeholder={getFunName()}/>
            <button type="submit">Visit Store</button>
            </form>
        )  
    }
}
 