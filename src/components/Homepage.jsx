import React from 'react'
import { Typography, Col, Row, Statistic } from 'antd';
import { useGetCrcyQuery } from '../services/cryptoAPI';
import { Link } from 'react-router-dom';
import Cryprocurrencies from './Cryprocurrencies';
import News from './News';
import millify from 'millify';
const Homepage = () => {
    const { data, isLoading } = useGetCrcyQuery(10)
    const stats = data?.data?.stats
    console.log('data: ', data)

    if (isLoading) return <h1>Loading...</h1>
    return (
        <>
            <Typography.Title level={2} className="heading">Global Crypto Status</Typography.Title>
            <Row>
                <Col span={12} ><Statistic title="Total Cryptocurrencies" value={millify(stats?.total)} /></Col>
                <Col span={12} ><Statistic title="Total Exchanges" value={millify(stats?.totalExchanges)} /></Col>
                <Col span={12} ><Statistic title="Total Market Cap" value={millify(stats?.totalMarketCap)} /></Col>
                <Col span={12} ><Statistic title="Total 24h Volume" value={millify(stats?.total24hVolume)} /></Col>
                <Col span={12} ><Statistic title="Total Markets" value={millify(stats?.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Top 10 cryptocurrencies in the world</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to="/crypto">Show more </Link></Typography.Title>
            </div>
            <Cryprocurrencies simplified />
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
                <Typography.Title level={3} className='show-more' ><Link to="/news">Show more </Link></Typography.Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage
