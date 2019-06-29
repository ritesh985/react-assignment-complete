import React from 'react';
import PropTypes from 'prop-types';
import PeopleItem from './PeopleItem';
import './App.css';

const App = (props) => {
  const { data, removeItem, handleDataEdit } = props;
  // console.log(this.props);

  return (
    <div>
      {data.map((person) => {
        return <PeopleItem key={person.id} person={person} removeItem={removeItem} handleDataEdit={handleDataEdit} />;
      })}
      {/* {data.map((r) => {
        return (
          <div key={r.id}>
            <p key={r.id}>{r.name}</p>
          </div>
        );
      })} */}
    </div>
  );
};

App.propTypes = {
  handleDataEdit: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default App;
