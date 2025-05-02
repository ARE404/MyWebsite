import React from 'react';

import { Card, Typography, Divider, Timeline, List, Tag, Row, Col, Avatar, Space } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, CalendarOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons';
import avatarImage from '../assets/images/ds3.jpeg';  // 正确导入图片
import PageLayout from '../components/PageLayout';

const { Title, Text, Paragraph } = Typography;

const Articles = () => {
    return (
        <PageLayout>
            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Avatar 
                    size={150}  // 更大的头像
                    src={avatarImage}
                    style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        border: '3px solid #1890ff',  // antd 主题蓝色边框
                        boxShadow: '0 4px 12px rgba(24,144,255,0.15)'  // 蓝色阴影效果
                    }}
                />
                <Title level={2} style={{ 
                    marginBottom: '8px', 
                    marginTop: '20px',
                    fontSize: '28px',  // 更大的字号
                    color: 'black',
                    WebkitBackgroundClip: 'text',
                }}>
                    张程博 / Bob Zhang
                </Title>
                <Paragraph>计算机入门，有时写点东西
                </Paragraph>
                <div style={{ marginTop: '16px' }}>
                    <Space direction="vertical" size={12}> 
                        <Text type="secondary">
                            <MailOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                            bobzhang8829@gmail.com
                        </Text>
                        <Text type="secondary">
                            <PhoneOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                            17873169132(CN) / 0493943335(AU)
                        </Text>
                        <Text type="secondary">
                            <EnvironmentOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                            Sydney, Australia
                        </Text>
                        <Text type="secondary">
                            <CalendarOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                            2001-06-16 (24)
                        </Text>
                    </Space>
                </div>
            </div>

            <Divider />

            {/* Education */}
            <div style={{ marginBottom: '24px' }}>
                <Title level={3}>教育经历</Title>
                <Timeline
                    style={{ padding: '16px' }}  // 添加内边距
                    items={[
                        {
                            color: '#1890ff',  // 使用主题色
                            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,  // 自定义时间点图标
                            children: (
                                <>
                                    <Title level={4}>中南大学 (长沙, 中国)</Title>
                                    <Text type="secondary">09/2019–06/2023</Text>
                                    <Paragraph>测控技术与仪器专业工学学士</Paragraph>
                                    <Paragraph>
                                        相关课程: <Tag>高级程序设计实践 (C++)</Tag> <Tag>面向对象编程 (C++)</Tag> 
                                        <Tag>人工智能</Tag> <Tag>数字图像采集与处理</Tag>
                                    </Paragraph>
                                </>
                            ),
                        },
                        {
                            color: '#1890ff',
                            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                            children: (
                                <>
                                    <Title level={4}>新南威尔士大学 (悉尼, 澳大利亚)</Title>
                                    <Text type="secondary">02/2024–02/2026</Text>
                                    <Paragraph>信息技术(Information Technology)硕士在读</Paragraph>
                                    <Paragraph>
                                        相关课程: <Tag>数据库基础</Tag> <Tag>数据结构与算法</Tag> 
                                        <Tag>计算机网络与应用</Tag> <Tag>前端开发</Tag>
                                    </Paragraph>
                                </>
                            ),
                        },
                    ]}
                />
            </div>

            <Divider />
        </PageLayout>
    );
};

export default Articles;