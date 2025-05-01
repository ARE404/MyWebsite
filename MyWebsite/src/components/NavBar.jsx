import React from 'react';
import { Menu, Button, Space } from 'antd';
import { HomeOutlined, UserOutlined, FileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Menu mode="horizontal" theme="light">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">About Me</Link>
                <Link to="/articles">Articles</Link>
            </Menu.Item>
        </Menu>
    );
};

export default NavBar;