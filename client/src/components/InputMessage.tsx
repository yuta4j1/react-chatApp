import * as React from 'react';
import * as styles from '../css/inputMessage';
import { sendMessage } from '../service/socket';

interface State {
  type: string;
  value: string;
}

type Props = { value: string; reflectChannel: (m: Message) => void };

class IntputMessage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      type: 'text',
      value: ''
    };
  }
  updateState(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      type: 'text',
      value: e.currentTarget.value
    });
  }
  send() {
    let msg: Message = {
      type: 'text',
      value: this.state.value
    };
    sendMessage(msg);
  }

  render() {
    const sendButtonLabel = '送信';
    return (
      <div className={styles.inputWrap}>
        <input
          type="text"
          placeholder="Type your message"
          className={styles.inputMessage}
          onChange={e => this.updateState(e)}
          value={this.state.value}
        />
        <button className={styles.sendButton} onClick={() => this.send()}>
          {sendButtonLabel}
        </button>
      </div>
    );
  }
}

export default IntputMessage;
