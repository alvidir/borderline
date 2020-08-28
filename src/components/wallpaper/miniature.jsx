import React, { Component } from "react"
import { CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import { Favorite, Share } from '@material-ui/icons';
import * as shareops from 'react-share';
import * as theme from '../theme/theme'
import * as factory from './factory'
import './styles.css'
import '../../styles/box.css'

export default class Miniature extends Component {
    state = {
        custom: undefined,
    }

    constructor(props) {
        super(props)

        this.state = {
            custom: props.custom,

        }
    }

    render() {
        const CustomCard = factory.NewMiniatureCard()

        return (
            <CustomCard className={this.props.className}
                        variant='outlined'>
                <CardActionArea
                    onClick={this.props.onClick}>
                    <CardMedia component="img"
                               alt="Contemplative Reptile"
                               height="140"
                               image={this.props.url}
                               title="Contemplative Reptile"/>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.author}
                        </Typography>
                        <Typography variant="body2" color={this.props.color} component="p"
                                    className='Bio'>
                            {this.props.bio}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions className="Reference">
                    <div className="HorizontalBox Middle">
                        <Button className={`Share ${theme.getThemeClass()}`}>
                            <Share />
                        </Button>
                    </div>
                    <div className="HorizontalBox Middle Like">
                        <Button className="Like">
                            <label className="Count">{this.props.likes}</label>
                            <Favorite/>
                        </Button>
                    </div>
                </CardActions>
            </CustomCard>
        )
    }
}