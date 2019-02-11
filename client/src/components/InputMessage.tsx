import * as React from 'react';
import * as styles from '../css/inputMessage';

interface MessageState {
  type: string;
  value: string;
}

interface MessageProps {
  value: string;
}

class IntputMessage extends React.Component<MessageProps, MessageState> {
  constructor(props: MessageProps) {
    super(props);
    this.state = {
      type: 'text',
      value: props.value
    };
  }
  updateState(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      type: 'text',
      value: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className={styles.inputWrap}>
        <input
          type="text"
          placeholder="Type your message"
          className={styles.inputMessage}
          onChange={e => this.updateState(e)}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default IntputMessage;
