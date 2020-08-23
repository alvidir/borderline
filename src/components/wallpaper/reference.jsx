import React, { Component } from "react";
import '../../styles/icon.css'

const DefaultTitle = 'Enjoying this picture? Learn more about the artist.'

class Reference extends Component {
    state = {
        profile_url: '',
    };

    componentWillReceiveProps(props) {
        this.setState({ profile_url: props.profileUrl });  
        console.log(props.profileUrl)
    }

    render() {
        return(
            <a href={this.state.profile_url} target="_blank" rel="noopener noreferrer">
                <div className="Reference Collapsed OverFooter">
                    <img src={`${process.env.PUBLIC_URL}/info.icon.svg`} alt='' className="SmallIcon" />
                    <label className="Title">{DefaultTitle}</label>
                </div>
            </a>
        )
    }
}

export default Reference;