import * as React from 'react';
import * as styles from '../css/messagePanel.css';

type PanelProps = {
  message: Message;
};

class MessagePanel extends React.Component<PanelProps, {}> {
  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelItem}>
          <div>ICON</div>
        </div>
        <div className={styles.panelItem}>
          <div>ユーザ名</div>
          <div>{this.props.message.value}</div>
        </div>
      </div>
    );
  }
}

export default MessagePanel;
