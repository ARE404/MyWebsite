import React from 'react';
import { Menu, Button, Space } from 'antd';
import { HomeOutlined, UserOutlined, FileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Menu mode="horizontal" theme="light">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <span><Link to="/">About Me</Link></span>
            </Menu.Item>
            <Menu.Item key="article" >
                <span><Link to="/articles">Articles</Link></span>
            </Menu.Item>
            
        </Menu>
    );
};

export default NavBar;