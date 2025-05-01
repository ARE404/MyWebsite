import { Card, Typography, Divider, Timeline, List, Tag, Row, Col, Avatar, Space } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import avatarImage from '../assets/images/ds3.jpeg';  // 正确导入图片

const { Title, Text, Paragraph } = Typography;

const AboutMe = () => {
    return (
        <div style={{ padding: '24px', background: '#f0f2f5', minHeight: '100vh' }}>
            <Row justify="center">
                <Col xs={24} sm={24} md={20} lg={16} xl={14}>
                    <Card>
                        {/* Header Section */}
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <Avatar 
                                size={120}  // 设置更大的尺寸
                                src={avatarImage}  // 使用导入的图片
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    objectFit: 'cover',  // 确保图片填充整个空间
                                    border: '2px solid #f0f0f0'  // 添加边框效果
                                }}
                            />
                            <Title level={2} style={{ marginBottom: '8px', marginTop: '16px' }}>张程博 / Bob Zhang</Title>
                            <div>
                                <Text type="secondary"><MailOutlined />  bobzhang8829@gmail.com</Text>
                                <br />
                                <Text type="secondary"><PhoneOutlined />  17873169132(CN) / 0493943335(AU)</Text>
                                <br />
                                <Text type="secondary"><EnvironmentOutlined />  Sydney, Australia</Text>
                                <br />
                                <Text type="secondary"><CalendarOutlined />  2001-06-16 (24)</Text>
                            </div>
                        </div>

                        {/* Self Introduction */}
                        <div style={{ marginBottom: '24px' }}>
                            <Title level={3}>自我评价</Title>
                            <Paragraph>计算机入门，基础的前端知识, 能独立解决问题。</Paragraph>
                        </div>

                        <Divider />

                        {/* Education */}
                        <div style={{ marginBottom: '24px' }}>
                            <Title level={3}>教育经历</Title>
                            <Timeline
                                items={[
                                    {
                                        color: 'blue',
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
                                        color: 'blue',
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

                        {/* Projects */}
                        <div style={{ marginBottom: '24px' }}>
                            <Title level={3}>项目经历</Title>
                            <Card title="在线问答游戏" extra={<Text type="secondary">02/2020–06/2023</Text>}>
                                <div style={{ marginBottom: '16px' }}>
                                    <Tag color="blue">React</Tag>
                                    <Tag color="green">Vitest</Tag>
                                    <Tag color="purple">Git</Tag>
                                    <Tag color="orange">Unit Test</Tag>
                                </div>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={[
                                        '协作完成了一个完整的前端开发项目，基于React.js独立搭建了一个单页应用（SPA），对接后端API实现用户注册登录、游戏管理、实时答题等核心功能。',
                                        '推动并落实代码规范与版本管理（Git），完成全程无错误Linting，提升团队协作效率。',
                                        '设计并执行组件测试与端到端测试（UI Testing），显著提升系统可靠性。'
                                    ]}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <Text>{item}</Text>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </div>

                        <Divider />

                        {/* Work Experience */}
                        <div style={{ marginBottom: '24px' }}>
                            <Title level={3}>实习经历</Title>
                            <Timeline
                                items={[
                                    {
                                        color: 'green',
                                        children: (
                                            <Card>
                                                <Title level={4}>Smart Choice Professional（悉尼, 澳大利亚）</Title>
                                                <Text type="secondary">06/2024–09/2024</Text>
                                                <Paragraph strong style={{ marginTop: '8px' }}>数据分析实习生</Paragraph>
                                                <Paragraph>
                                                    负责管理多个数据驱动的项目，致力于提升数据分析的准确性和效率。使用Python相关技术和Excel进行数据清洗和可视化，以及使用Numpy和Pandas进行统计分析。为客户提供直观的报告，帮助客户深入理解行业数据洞察，支持业务决策。
                                                </Paragraph>
                                            </Card>
                                        ),
                                    },
                                    {
                                        color: 'green',
                                        children: (
                                            <Card>
                                                <Title level={4}>上海交通大学（上海, 中国）</Title>
                                                <Text type="secondary">12/2024–01/2025</Text>
                                                <Paragraph strong style={{ marginTop: '8px' }}>国际暑校助教实习生</Paragraph>
                                                <Paragraph>
                                                    实习期间担任项目管理创新技术和数据处理要素两门课程的助教，主要负责考勤管理、解答同学疑问、协助老师准备课程材料、批改作业和试卷等。
                                                </Paragraph>
                                            </Card>
                                        ),
                                    },
                                ]}
                            />
                        </div>

                        <Divider />

                        {/* Language Skills */}
                        <div>
                            <Title level={3}>语言能力</Title>
                            <Space size={[0, 8]} wrap>
                                <Tag color="blue">英语六级</Tag>
                                <Tag color="green">雅思 7.5 分</Tag>
                                <Tag color="cyan">听力: 8</Tag>
                                <Tag color="cyan">阅读: 9</Tag>
                            </Space>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutMe;