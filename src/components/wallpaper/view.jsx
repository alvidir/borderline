import React from "react"
import Reference from './reference'
import Theme, * as theme from '../theme/theme'
import fetch from "node-fetch"
import * as factory from './factory'
import * as map from '../../commons/parse/map'
import './styles.css'
import '../header/styles.css'

const timeout = parseInt(process.env.REACT_APP_WALLPAPER_TIMEOUT) * 1000 // seconds to to ms
const rest_url = process.env.REACT_APP_UNSPLASH_API_URL
const wallpaper_srv = rest_url + process.env.REACT_APP_REST_SRV_WALLPAPER
console.log('Set wallpaper service at ', wallpaper_srv)

export default class View extends Theme {
    state = {
        metadata: [],
        topLayer: undefined,
        bottomLayer: undefined,
        topHidden: false,
    }

    constructor(props) {
        super(props)
        this.onUpdate = this.onUpdate.bind(this)
        this.DynamicWallpaper = this.DynamicWallpaper.bind(this)
        this.getStyleTopLayout = this.getStyleTopLayout.bind(this)
        this.getStyleBottomLayout = this.getStyleBottomLayout.bind(this)
        
        this.state = {
            metadata: [],
            topLayer: undefined,
            bottomLayer: undefined,
            topHidden: false,
        }
    }

    componentDidMount() {
        this.onUpdate()
    }

    getStyleTopLayout(url) {
        if (!this.state.topHidden) {
            // If top layer is visible, it must not change. Is the bottom one which has to be updated
            return this.state.topLayer
        }

        return factory.NewCustomLayer(url)
    }

    getStyleBottomLayout(url) {
        if (this.state.topHidden) {
            // If top layer is hidden, then the bottom one shall not be updated due its visible.
            return this.state.bottomLayer
        }

        return factory.NewCustomLayer(url)
    }

    async onUpdate() {
        const data = await fetch(wallpaper_srv)
        const wallpaper = await data.json()
        const url = wallpaper['urls']['regular']

        this.setState({
            metadata: wallpaper,
            bottomLayer: this.getStyleBottomLayout(url),
            topLayer: this.getStyleTopLayout(url),
            topHidden: !this.state.topHidden,
        })

        setTimeout(this.onUpdate, timeout);
    }

    fromMetadata() {
        return map.Nav(this.state.metadata, arguments)
    }

    DynamicWallpaper() {
        const layerVariant = this.state.topHidden? 'Hidden' : ''
        const curtainVariant = this.props.hidden? theme.onDefaultTheme()? 'Light' : 'Dark' : 'None'

        return(
            <div>
                <div id="bottom" style={this.state.bottomLayer} className="Wallpaper Layer"/>
                <div id="top" style={this.state.topLayer} className={`Wallpaper Layer ${layerVariant}`}/>
                <div className={`Curtain ${curtainVariant}`}/>
            </div>
        )
    }

    render() {        
        return(
            <div className='Wallpaper'>
                <this.DynamicWallpaper/>
                <div className="Body">
                    {this.props.children}
                </div>
                <Reference profileUrl={this.fromMetadata('user', 'links', 'html')}
                           postUrl={this.fromMetadata('links', 'html')}
                           url={this.fromMetadata('urls', 'small')}
                           author={this.fromMetadata('user', 'name')}
                           bio={this.fromMetadata('user', 'bio')}
                           likes={this.fromMetadata('likes')}
                           description={this.fromMetadata('description')}
                           profileImage={this.fromMetadata('user', 'profile_image', 'small')}
                           hidden={this.props.hidden}/>
            </div>
        )
    }
}