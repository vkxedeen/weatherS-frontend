import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import AddCityInput from '../../pages/components/AddCityInput';
import Logo from '../../icons/Logo';

import '../../../css/mainLayout.css';

const { Header, Sider, Content } = Layout;

const MainLayout = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Sider trigger={null}>
        <Logo />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <UserOutlined />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background header">
          <AddCityInput />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
