import React, { Component } from 'react'

export default class TopNavbar extends Component {
  render() {
    return (
      <header>
        <div class="container">
          <a href="#" class="brand-title">Home</a>
          <nav class="pull-right">
            <a href="#">Settings</a>
            <a href="#">About</a>
          </nav>
        </div>
      </header>
    )
  }
}
