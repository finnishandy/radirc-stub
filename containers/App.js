import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IrcCommand from '../components/irc-command'
import * as CounterActions from '../actions/counter'

function mapStateToProps(state) {
  return {
    ws: state.IRC_CONNECTION
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps)(IrcCommand)
