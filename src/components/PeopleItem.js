import React from 'react';
import { Col, Card, Icon } from 'antd';
import PropTypes from 'prop-types';
import CollectionCreateForm from './CollectionCreateForm';
import './PeopleItem.css';

class PeopleItem extends React.Component {
  state = { theme: '', visible: false };

  style = { background: 'none', border: 'none', outline: 'none', cursor: 'pointer' };

  toggleState = () => {
    // theme === '' ? this.setState({ theme: 'filled' }) : this.setState({ theme: '' });
    const { theme } = this.state;
    if (theme === '') {
      this.setState({ theme: 'filled' });
    } else {
      this.setState({ theme: '' });
    }
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCreate = (e) => {
    e.preventDefault();
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const { handleDataEdit, person } = this.props;

      // console.log('Received values of form: ', values);
      // form.resetFields();
      this.setState({
        visible: false,
      });
      handleDataEdit(values, person.id);
      // console.log(values.name);
    });

    // console.log(this.state.name)
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    // console.log(values);
    // console.log(this.state.name);

    const { removeItem, person } = this.props;
    const { visible, theme } = this.state;
    const img = `https://avatars.dicebear.com/v2/avataaars/${person.username}.svg?options[mood][]=happy`;
    return (
      <div>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Card
            style={{ margin: '15px' }}
            cover={<img alt="example" src={img} width="200px" height="200px" />}
            actions={[
              <button type="button" style={this.style} onClick={this.toggleState}>
                {' '}
                <Icon type="heart" style={{ fontSize: '20px', color: '#F50000' }} theme={theme} />
              </button>,
              <button type="button" style={this.style} onClick={this.showModal}>
                <Icon type="edit" style={{ fontSize: '18px' }} />
              </button>,
              <button type="button" style={this.style} onClick={() => removeItem(person.id)}>
                <Icon type="delete" style={{ fontSize: '18px' }} theme="filled" />{' '}
              </button>,
            ]}
          >
            <div>
              <h3>{person.name}</h3>
              <div>
                <p className="p-style">
                  <Icon type="mail" style={{ fontSize: '18px', marginRight: '10px' }} />{' '}
                  <span id="p1">{person.email}</span>{' '}
                </p>
              </div>
              <div>
                <p className="p-style">
                  <Icon type="phone" style={{ fontSize: '18px', marginRight: '10px' }} />{' '}
                  <span id="p2">{person.phone}</span>{' '}
                </p>
              </div>
              <div>
                <p className="p-style">
                  <Icon type="global" style={{ fontSize: '18px', marginRight: '10px' }} /> http://{' '}
                  <span id="p3">{person.website}</span>{' '}
                </p>
              </div>
            </div>
          </Card>
        </Col>

        {/* MOdal */}

        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          name={person.name}
          email={person.email}
          phone={person.phone}
          website={person.website}
        />
      </div>
    );
  }
}

PeopleItem.propTypes = {
  handleDataEdit: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default PeopleItem;
