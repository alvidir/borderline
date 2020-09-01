import React, { Component } from "react"
import { CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import { Favorite, Share } from '@material-ui/icons';
import * as theme from '../theme/theme'
import * as factory from './factory'
import './styles.css'
import '../../styles/box.css'

export default class Miniature extends Component {
    render() {
        const CustomCard = factory.NewMiniatureCard()

        return (
            <CustomCard className={this.props.className}
                        variant='outlined'>
                <CardActionArea
                    onClick={() => this.props.onClick(factory.ProfileKey)}>
                    <CardMedia component="img"
                               alt={this.props.author}
                               height="140"
                               image={this.props.url}
                               title={this.props.author}/>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                                <img src={this.props.profileImage}
                                     className="ProfileImage"
                                     alt={this.props.author} /> 
                                <label>{this.props.author}</label>
                        </Typography>
                        <Typography variant="body2" color={this.props.color} component="p"
                                    className='Bio'>
                            {this.props.bio}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions className="Reference">
                    <div className="HorizontalBox Middle">
                        <Button className={`Share ${theme.getThemeClass()}`}
                                onClick={() => this.props.onClick(factory.ShareKey)}>
                            <Share />
                        </Button>
                    </div>
                    <div className="HorizontalBox Middle Like">
                        <Button className="Like"
                                onClick={() => this.props.onClick(factory.LikeKey)}>
                            <label className="Count">{this.props.likes}</label>
                            <Favorite/>
                        </Button>
                    </div>
                </CardActions>
            </CustomCard>
        )
    }
}