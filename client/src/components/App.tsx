import * as React from 'react';
import Header from './Header';
import InputMessage from './InputMessage';
import * as styles from '../css/app.css';

const App = (): JSX.Element => {
  const logoTitle = 'chat room';
  const initMessage = {
    value: ''
  };
  return (
    <div>
      <div className={styles.header}>
        <Header value={logoTitle} />
      </div>
      <div className={styles.body} />
      <div className={styles.footer}>
        <InputMessage props={initMessage} />
      </div>
    </div>
  );
};

export default App;
