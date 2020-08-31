import React, { Component } from 'react'
import * as minKeys from '../wallpaper/miniature'
import { List, ListItem, DialogTitle, Dialog} from '@material-ui/core';
import './styles.css'

export default class ListDialog extends Component {
    state = {
        items: []
    }

    constructor(props) {
        super(props)

        console.log(props.items)
        this.state = {
            items: props.items,
        }
    }

    render() {
        return(
            <Dialog onClose={() => this.props.onClose(minKeys.ShareName)}
                    onClick={() => this.props.onClose(minKeys.ShareName)}
                    open={this.props.open}>
                <DialogTitle id="simple-dialog-title">Share image</DialogTitle>
                <List className="Supper">
                    {this.props.items && this.props.items.map((item) =>
                        <ListItem>
                            {item}
                        </ListItem>
                    )}
                </List>
            </Dialog>
        )
    }
}