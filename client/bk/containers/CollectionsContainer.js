import React, {Component} from  'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchCols} from '../actions/collections'
import Spinner from '../components/Spinner'
import CollectionListItem from '../components/CollectionListItem'

class CollectionList extends Component {
  constructor(props) {
    super(props)
  }

  propTypes: {
    cols: React.PropTypes.array,
    dbName: React.PropTypes.string,
    fetchCols: React.PropTypes.func
  }

  componentWillMount() {
    this.props.fetchCols(this.props.dbName)
  }

  renderCollectionList(cols) {
    return cols.map((col) => {
      return (
        <CollectionListItem col={col} key={col.name}/>
      )
    })
  }

  render() {
    return (
        <div>{this.renderCollectionList(this.props.cols)}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    some: 'some',
    cols: state.cols.cols
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCols: dbName => dispatch(fetchCols(dbName))
  }
}

const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(CollectionList)

export default CollectionContainer
