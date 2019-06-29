import React from 'react';
import PropTypes from 'prop-types';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

class TablePage extends React.Component {
  state = {
    searchText: '',
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },

    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        // eslint-disable-next-line
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const { data } = this.props;
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend'],
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        ...this.getColumnSearchProps('username'),
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        ...this.getColumnSearchProps('phone'),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        ...this.getColumnSearchProps('email'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (e) => {
          return (
            <span>
              {e.suite}, {e.street}, {e.city}, {e.zipcode}{' '}
            </span>
          );
        },
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: (e) => {
          return (
            <span>
              {e.name}, {e.bs}, {e.catchPhrase}
            </span>
          );
        },
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        ...this.getColumnSearchProps('website'),
        render: (e) => {
          return <span>https://{e}</span>;
        },
      },
    ];

    return (
      <div>
        <Table rowKey={(dataId) => dataId.id} columns={columns} dataSource={data} />
      </div>
    );
  }
}

TablePage.propTypes = {
  data: PropTypes.array.isRequired,
};
export default TablePage;
