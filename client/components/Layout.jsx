import React, { Component } from 'react'
import DatabasesContainer from '../containers/DatabasesContainer'
import Navbar from './Navbar'
import { Col } from 'react-bootstrap'

export default class Layout extends Component {
	render() {
    const style = {
      paddingTop: 70
    }
		return (
      <div>
        <Navbar />
    		<div class="container" style={style}>
          <div class="row">
            <Col sm={3}>
              <DatabasesContainer />
            </Col>
            <Col sm={9}>
              {this.props.children}
            </Col>
    			</div>
        </div>
      </div>
		)
	}
}
