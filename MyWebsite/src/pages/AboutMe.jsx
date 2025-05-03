import { Card, Typography, Divider, Timeline, List, Tag, Row, Col, Avatar, Space } from 'antd';
import {
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined,
    CalendarOutlined,
    UserOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import avatarImage from '../assets/images/ds3.jpeg';
import '../styles/AboutMe.css';

const { Title, Text, Paragraph } = Typography;

const AboutMe = () => {
    return (
        <>
            {/* Header Section */}
            <div className="about-header">
                <Avatar
                    size={150}
                    src={avatarImage}
                    className="about-avatar"
                />
                <Title level={2} className="about-title">
                    张程博 / Bob Zhang
                </Title>
                <Paragraph>计算机入门，有时写点东西</Paragraph>
                <div className="contact-info">
                    <Space direction="vertical" size={0}>
                        <Text type="secondary">
                            <MailOutlined className="contact-item" />
                            bobzhang8829@gmail.com
                        </Text>
                        <Text type="secondary">
                            <PhoneOutlined className="contact-item" />
                            17873169132(CN) / 0493943335(AU)
                        </Text>
                        <Text type="secondary">
                            <EnvironmentOutlined className="contact-item" />
                            Sydney, Australia
                        </Text>
                        <Text type="secondary">
                            <CalendarOutlined className="contact-item" />
                            2001-06-16 (24)
                        </Text>
                    </Space>
                </div>
            </div>

            <Divider className="section-divider" />

            {/* Education */}
            <div className="education-section">
                <Title level={3} className="section-title">教育经历</Title>
                <Timeline
                    className="timeline-container"
                    items={[
                        {
                            color: '#1890ff',
                            dot: <ClockCircleOutlined className="timeline-icon" />,
                            children: (
                                <>
                                    <Title level={4}>中南大学 (长沙, 中国)</Title>
                                    <Text type="secondary">09/2019–06/2023</Text>
                                    <Paragraph>测控技术与仪器专业工学学士</Paragraph>
                                    <Paragraph className="course-tags">
                                        相关课程: 
                                        <Tag className="course-tag">高级程序设计实践 (C++)</Tag>
                                        <Tag className="course-tag">面向对象编程 (C++)</Tag>
                                        <Tag className="course-tag">人工智能</Tag>
                                        <Tag className="course-tag">数字图像采集与处理</Tag>
                                    </Paragraph>
                                </>
                            ),
                        },
                        {
                            color: '#1890ff',
                            dot: <ClockCircleOutlined className="timeline-icon" />,
                            children: (
                                <>
                                    <Title level={4}>新南威尔士大学 (悉尼, 澳大利亚)</Title>
                                    <Text type="secondary">02/2024–02/2026</Text>
                                    <Paragraph>信息技术(Information Technology)硕士在读</Paragraph>
                                    <Paragraph className="course-tags">
                                        相关课程: 
                                        <Tag className="course-tag">数据库基础</Tag>
                                        <Tag className="course-tag">数据结构与算法</Tag>
                                        <Tag className="course-tag">计算机网络与应用</Tag>
                                        <Tag className="course-tag">前端开发</Tag>
                                    </Paragraph>
                                </>
                            ),
                        },
                    ]}
                />
            </div>

            <Divider className="section-divider" />
        </>
    );
};

export default AboutMe; 