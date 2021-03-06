import * as React from 'react';
import Header from './Header';
import InputMessage from './InputMessage';
import ChannelLine from './ChannelLine';
import * as styles from '../css/app.css';

type State = {
  messages: Message[];
};

class App extends React.Component<{}, State> {
  constructor({}) {
    super({});
    this.state = {
      messages: []
    };
  }

  updateChannel(msg: Message) {
    this.state.messages.push(msg);
    const arr: Message[] = this.state.messages;
    this.setState({
      messages: arr
    });
    // debug
    console.log(this.state.messages);
  }

  render() {
    const logoTitle = 'chat room';
    return (
      <div>
        <div className={styles.header}>
          <Header value={logoTitle} />
        </div>
        <div className={styles.body}>
          <ChannelLine messages={this.state.messages} />
        </div>
        <div className={styles.footer}>
          <InputMessage
            value={''}
            reflectChannel={(msg: Message) => this.updateChannel(msg)}
          />
        </div>
      </div>
    );
  }
}

export default App;
