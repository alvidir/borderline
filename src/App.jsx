import React, {Component, Fragment} from "react"

import Wallpaper from "./components/wallpaper/view"
import Header from "./components/header/navbar"
import Foot from "./components/footer/foot"

import { withRouter } from 'react-router-dom'

class App extends Component {
  state = {
    hiddenWall: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      hiddenWall: false
    }
  }

  componentWillUnmount() {
    this.unlisten();
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({ hiddenWall: location.pathname !== "/"})
    })
  }

  render() {
    const hidden = window.location.pathname !== '/'

    return (
      <Fragment>
        <Header/>
        <Wallpaper hidden={hidden}>
          {this.props.children}
        </Wallpaper>
        <Foot />
      </Fragment>
    )
  }
}

export default withRouter(App)