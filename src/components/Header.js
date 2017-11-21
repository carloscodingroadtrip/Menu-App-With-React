import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="top">
            <h1>Catch of the day</h1>
            <h3 className="tagline">{this.props.tagline}</h3>
            </header>
        )
    }
}
