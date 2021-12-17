import React, { useEffect, useState } from 'react'
import { Card, Col, Input, Row } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCrcyQuery } from '../services/cryptoAPI'
import Loader from './Loader'
const Cryprocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isLoading, isFetching } = useGetCrcyQuery(count)
    const [crpytos, setCrpytos] = useState([])
    const [enteredInput, setEnteredInput] = useState('')

    if (isFetching) <Loader />;
    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((val) => val.name.toLowerCase().includes(enteredInput.toLowerCase()))
        setCrpytos(filteredData)
    }, [cryptosList, enteredInput])
    return (
        <>
            {!simplified &&
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={el => setEnteredInput(el.target.value)} />
                </div>
            }
            <Row gutter={[32, 32]} className="crypto-card-container">
                {crpytos && crpytos.map(cry => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={cry?.id}>
                        <Link to={`/crypto/${cry.id}`}>
                            <Card title={`${cry?.rank}. ${cry?.name}`}
                                extra={<img className="crypto-image" src={cry.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {cry.price}</p>
                                <p>Market Cap: {cry.marketCap}</p>
                                <p>Daily Change: {cry.change}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Cryprocurrencies