import React, { Component, PropTypes } from 'react'

class IrcCommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: '',
      nick: ''
    }
  }

  onClick() {
    const { dispatch } = this.props;
    const { command } = this.state;
    dispatch({ type: 'SEND_CHAT_MESSAGE', irc_command: command + '\n'});
    console.log('command', command);
  }

  handleChange(event) {
    console.log('input val:', event.target.value);
    this.setState({command: event.target.value});
  }

  changeNick(event) {
    console.log('input val:', event.target.value);
    this.setState({nick: event.target.value});
  }

  onRegister() {
    const { dispatch } = this.props;
    console.log("props", this.props);
    const { nick } = this.state;
    dispatch({ type: 'SEND_CHAT_MESSAGE', irc_command:   "NICK " + nick + " \n"});
    dispatch({ type: 'SEND_CHAT_MESSAGE', irc_command:   "USER " + nick + " * 0 :" + nick + " \n"});
  }

  render() {
    const { ws } = this.props;
    console.log('ws', ws);
    return (
      <div>
        <input type="text" placeholder="nickname" value={this.state.nick} onChange={this.changeNick.bind(this)}/><br/>
        <input type="text" placeholder="IRC command" value={this.state.command} onChange={this.handleChange.bind(this)} />
        <input type="submit" value="submit" onClick={this.onClick.bind(this)}/><br/>
        <input type="submit" value="register" onClick={this.onRegister.bind(this)}/>
      </div>
    )
  }
}

export default IrcCommand;
