import React from 'react';
import axios from 'axios';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Loader from './Loader';
import TablePage from '../pages/TablePage';
import NavbarHead from '../NavbarHead';
import AddUserForm from '../forms/AddUserForm';

class DataInput extends React.Component {
  state = { data: [], loading: true };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({ data: response.data, loading: false });
        // console.log(response)
      })
      .catch((error) => console.log(error));
  }

  removeItem = (item) => {
    const { data } = this.state;
    const newList = data.filter((test) => {
      return test.id !== item;
    });
    this.setState({
      data: [...newList],
    });
  };

  handleDataEdit = (editedItem, editId) => {
    // console.log(editedItem);
    // console.log(editId);
    const { data } = this.state;
    const editList = data.map((item) => {
      if (item.id === editId) {
        return { ...item, ...editedItem };
      }
      return item;
    });
    // console.log(editList);
    this.setState({
      data: [...editList],
    });
  };

  newUserEntry = (values, newId) => {
    // console.log(values);
    // console.log(newId);
    const { data } = this.state;
    data.push({ ...values, id: newId + 1 });
    console.log(data);
    // console.log(data.length);
  };

  render() {
    const { loading, data } = this.state;
    // console.log(data[data.length - 1]);

    if (loading) {
      return <Loader />;
    }
    return (
      <div>
        <BrowserRouter>
          <NavbarHead />
          <Route
            path="/"
            exact
            component={() => <App data={data} handleDataEdit={this.handleDataEdit} removeItem={this.removeItem} />}
          />
          <Route path="/tablePage" exact component={() => <TablePage data={data} />} />
          <Route
            path="/addUser"
            exact
            component={() => <AddUserForm newUserEntry={this.newUserEntry} count={data[data.length - 1].id} />}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default DataInput;
