import React, { Component } from 'react';
import Layout from './../components/Layout'
import {Col} from 'react-bootstrap'
import { Link } from 'react-router'

export default class Main extends Component {
	render() {
		return (
    		<div class="row">
    			<Col xs={12}>
    				<h1>Main page.</h1>
    				<Link to="/about">About</Link>
    			</Col>
    		</div>
		);
	}
}
