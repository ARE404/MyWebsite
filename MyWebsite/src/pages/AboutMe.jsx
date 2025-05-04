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
import ThreeDText from '../components/ThreeDText';

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
                
                <div className='moto'>
                    <ThreeDText></ThreeDText>
                </div>
                
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

            {/* Project Experience */}
            <div className="experience-section">
                <Title level={3} className="section-title">项目经历</Title>
                <Timeline
                    className="timeline-container"
                    items={[
                        {
                            color: '#1890ff',
                            dot: <ClockCircleOutlined className="timeline-icon" />,
                            children: (
                                <>
                                    <Title level={4}>在线问答游戏</Title>
                                    <Text type="secondary">02/2020–06/2023</Text>
                                    <Tag color="blue" style={{ marginLeft: '8px' }}>React</Tag>
                                    <Tag color="blue">Vitest</Tag>
                                    <Tag color="blue">Git</Tag>
                                    <Tag color="blue">Unit Test</Tag>
                                    <Paragraph style={{ marginTop: '8px' }}>
                                        • 协作完成了一个完整的前端开发项目，基于React.js独立搭建了一个单页应用（SPA），对接后端API实现用户注册登录、游戏管理、实时答题等核心功能。
                                    </Paragraph>
                                    <Paragraph>
                                        • 推动并落实代码规范与版本管理（Git），完成全程无错误Linting，提升团队协作效率。
                                    </Paragraph>
                                    <Paragraph>
                                        • 设计并执行组件测试与端到端测试（UI Testing），显著提升系统可靠性。
                                    </Paragraph>
                                </>
                            ),
                        },
                    ]}
                />
            </div>

            <Divider className="section-divider" />

            {/* Internship Experience */}
            <div className="experience-section">
                <Title level={3} className="section-title">实习经历</Title>
                <Timeline
                    className="timeline-container"
                    items={[
                        {
                            color: '#1890ff',
                            dot: <ClockCircleOutlined className="timeline-icon" />,
                            children: (
                                <>
                                    <Title level={4}>Smart Choice Professional（悉尼, 澳大利亚）</Title>
                                    <Text type="secondary">06/2024–09/2024</Text>
                                    <Paragraph style={{ fontWeight: 'bold', marginTop: '8px' }}>数据分析实习生</Paragraph>
                                    <Paragraph>
                                        负责管理多个数据驱动的项目，致力于提升数据分析的准确性和效率。使用Python相关技术和Excel进行数据清洗和可视化，以及使用Numpy和Pandas进行统计分析。为客户提供直观的报告，帮助客户深入理解行业数据洞察，支持业务决策。
                                    </Paragraph>
                                </>
                            ),
                        },
                        {
                            color: '#1890ff',
                            dot: <ClockCircleOutlined className="timeline-icon" />,
                            children: (
                                <>
                                    <Title level={4}>上海交通大学（上海, 中国）</Title>
                                    <Text type="secondary">12/2024–01/2025</Text>
                                    <Paragraph style={{ fontWeight: 'bold', marginTop: '8px' }}>国际暑校助教实习生</Paragraph>
                                    <Paragraph>
                                        实习期间担任项目管理创新技术和数据处理要素两门课程的助教，主要负责考勤管理、解答同学疑问、协助老师准备课程材料、批改作业和试卷等。
                                    </Paragraph>
                                </>
                            ),
                        },
                    ]}
                />
            </div>

            <Divider className="section-divider" />

            {/* Language Skills */}
            <div className="skills-section">
                <Title level={3} className="section-title">语言能力</Title>
                <Space direction="vertical" size={16} style={{ width: '100%', maxWidth: '900px' }}>
                    <Card>
                        <Space wrap>
                            <Tag color="blue">英语六级</Tag>
                            <Tag color="blue">雅思 7.5 分 (听力8 阅读9)</Tag>
                        </Space>
                    </Card>
                </Space>
            </div>

        </>
    );
};

export default AboutMe; 