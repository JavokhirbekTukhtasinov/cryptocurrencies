import React, { useState } from 'react'
import { Typography, Row, Col, Card, Avatar, Select } from 'antd'
import { useGetCryptoNewsQuery } from '../services/newsAPI'
import moment from 'moment'
import { useGetCrcyQuery } from '../services/cryptoAPI'

const { Text, Title } = Typography
const { Option } = Select
const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: newsList, isLoading, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 50 })
    const { data } = useGetCrcyQuery(100)
    console.log('news', newsList)
    if (!newsList) {
        return <h1>Loading</h1>
    }
    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurency">Cryptocurrency</Option>
                        {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
                    </Select>
                </Col>
            )}
            {newsList && newsList?.value.map(val => (
                <Col xs={24} sm={12} lg={8} key={val.name} >
                    <Card hoverable className="news-card">
                        <a href={val?.url} target="_blank" >
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{val?.name}</Title>
                                <img src={val?.image?.thumbnail?.contentUrl || ""} alt="news" />
                            </div>
                            <p>
                                {val?.description > 20 ?
                                    `${val.description.substring(0, 20)}...` :
                                    val.description
                                }
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={val.provider[0]?.image?.thumbnail?.contentUrl || ''} />
                                    <Text className="provider-name">{val?.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(val.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>

    )

}
export default News
