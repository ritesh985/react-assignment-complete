import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './NavbarHead.css';

const NavbarHead = () => {
  const { Header } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            <Link to="/">HOME</Link>{' '}
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/tablePage">TABLEDATA</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/addUser">ADD USER</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default NavbarHead;
