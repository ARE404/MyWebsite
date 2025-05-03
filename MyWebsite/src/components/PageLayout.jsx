
import { Card, Typography, Divider, Timeline, List, Tag, Row, Col, Avatar, Space } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, CalendarOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons';

const PageLayout = ( {children} ) => {
    return (
        <div style={{ 
            padding: '32px 24px',  
            background: 'linear-gradient(to bottom, #f0f2f5, #fff)', 
            minHeight: '100vh', 
            width: '1280px'
        }}>
            <Row justify="center">
                <Col xs={24} sm={24} md={20} lg={16} xl={14}>
                    <Card 
                        style={{ 
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',  // 更柔和的阴影
                            borderRadius: '16px' 
                        }}
                    >
                        {children}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PageLayout;