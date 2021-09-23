import React, { Component } from 'react'
import './sectionH.css'

export default class SectionH extends Component {
    render() {
        return (
            <>
                <div className="sectionH">
                    <h2>
                        <span>{this.props.one}</span>
                        <span>{this.props.two}</span>
                        <span>{this.props.three}</span>
                        <span>{this.props.four}</span>
                        <span>{this.props.five}</span>
                        <span>{this.props.six}</span>
                        <span>{this.props.seven}</span>
                        <span>{this.props.eight}</span>
                    </h2>
                </div>
            </>
        )
    }
}

