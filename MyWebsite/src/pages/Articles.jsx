import { Card, Typography, Tag, Row, Col } from 'antd';
import '../styles/Articles.css';

const { Title, Text, Paragraph } = Typography;

const Articles = () => {
    return (
        <div className="articles-container">
            <Row gutter={[24, 24]}>
                <Col xs={24} sm={24} md={12} lg={8}>
                    <Card className="article-card">
                        <Title level={3} className="article-title">
                            文章标题
                        </Title>
                        <div className="article-meta">
                            <Text type="secondary">发布于 2024-03-20</Text>
                        </div>
                        <Paragraph className="article-content">
                            这里是文章的简短描述，介绍文章的主要内容...
                        </Paragraph>
                        <div className="article-tags">
                            <Tag className="article-tag">React</Tag>
                            <Tag className="article-tag">前端开发</Tag>
                            <Tag className="article-tag">JavaScript</Tag>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Articles; 