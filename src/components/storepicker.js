import React, { Component } from 'react';

export default class StorePicker extends Component {
    render() {
        return (
            <form className="store-selector">
            <h2>Please enter an store:</h2>
            <input type="text" require placeholder="Store name"/>
            <button type="submit">Visit Store</button>
            </form>
        )
    }
}
 