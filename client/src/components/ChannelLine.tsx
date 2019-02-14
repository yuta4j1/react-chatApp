import * as React from 'react';
import MessagePanel from './MessagePanel';

type ChannelLineProps = {
  messages: Message[];
};

type ChannelLineState = {
  messages: Message[];
};

class ChannelLine extends React.Component<ChannelLineProps, ChannelLineState> {
  constructor(props: ChannelLineProps) {
    super(props);
    this.state = {
      messages: []
    };
  }

  render() {
    return (
      <div>
        {this.state.messages.map(msg => {
          return <MessagePanel message={msg} />;
        })}
      </div>
    );
  }
}

export default ChannelLine;
