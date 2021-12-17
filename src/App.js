import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Layout, Space, Typography } from "antd";
import Homepage from "./components/Homepage";
import Exchange from "./components/Exchange";
import Cryprocurrencies from "./components/Cryprocurrencies";
import CryptoDetail from "./components/CryptoDetail";
import News from "./components/News";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchange />} />
              <Route path="/crypto" element={<Cryprocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetail />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "#fff", textAlign: "center" }}
          >
            Crypo app <br />
            All rigthtes reserved
          </Typography.Title>
          <Space>
            <Link to="/">HOME</Link>
            <Link to="/exchanges">EXCHANGES</Link>
            <Link to="/news">NEWS</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
