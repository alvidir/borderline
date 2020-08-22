import React, { Component } from "react";
import '../../styles/icon.css'

const DefaultTitle = 'Enjoying this picture? Learn more about the artist.'

class Reference extends Component {
    state = {
        collapsed: true,
    };

    CollapsedView() {
        return(
            <div className="Reference Collapsed">
                <img src={`${process.env.PUBLIC_URL}/info.icon.svg`} alt='' className="SmallIcon" />
                <label className="Title">{DefaultTitle}</label>
            </div>
        )
    }

    render() {
        return this.CollapsedView()
    }
}

export default Reference;