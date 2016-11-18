import React, { Component } from 'react';
import Layout from './../components/Layout'
import { Link } from 'react-router'

export default class Main extends Component {
	render() {

		return (
    		<div class="row">
    				<h1>Main page.</h1>
    				<Link to="/about">About</Link>
    		</div>
		)
	}
}
