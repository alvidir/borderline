import React, { Component } from "react"
import {InfoOutlined} from '@material-ui/icons'
import './styles.css'

const DefaultTitle = 'Enjoying this picture? Learn more about the artist.'

export default class Reference extends Component {
    state = {
        profile_url: '',
    }

    componentWillReceiveProps(props) {
        this.setState({ profile_url: props.profileUrl })  
    }

    render() {
        return(
            <a href={this.state.profile_url} target="_blank" rel="noopener noreferrer">
                <div className="Reference Collapsed OverFooter">
                    <InfoOutlined className="SmallIcon" />
                    <label className="AltTitle">{DefaultTitle}</label>
                </div>
            </a>
        )
    }
}