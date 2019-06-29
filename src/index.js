import React from 'react';
import ReactDOM from 'react-dom';
import DataInput from './components/DataInput';

const Routing = () => {
  return (
    <div>
      <DataInput />
    </div>
  );
};

ReactDOM.render(<Routing />, document.getElementById('root'));
