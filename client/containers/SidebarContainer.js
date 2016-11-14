import {connect} from 'react-redux'
import {fetchDbs, fetchDbsSuccess} from '../actions/databases'
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state) => {
  return {
    dbsList: state.dbs.dbsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDbs: () => {
      dispatch(fetchDbs()).payload.then((response) => {
        dispatch(fetchDbsSuccess(response))
      })
    }
  }
}


const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
