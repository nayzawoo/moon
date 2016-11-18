import React, { Component } from 'react'
import DatabasesContainer from '../containers/DatabasesContainer'
import Navbar from './Navbar'

export default class Layout extends Component {
	render() {
    const style = {
      paddingTop: 20
    }
		return (
      <div>
        <Navbar />
    		<div class="container" style={style}>
          <div class="columns">
            <div class="one-fifth column">
              <DatabasesContainer />
            </div>
            <div class="four-fifths column">
              {this.props.children}
            </div>
    			</div>
        </div>
      </div>
		)
	}
}
