import React, { Component } from "react";
import { Button, Row, Col, Modal, Radio, Card, Progress, Spin } from "antd";
import "./home.css";
import {FastForwardOutlined} from '@ant-design/icons'
export default class Contact extends Component {
  state = {
    isModalVisible: false,
    value: 1,
  };

  render() {
    const showModal = () => {
      this.setState({
        isModalVisible: true,
      });
    };
    const handleOk = () => {
      this.setState({
        isModalVisible: false,
      });
    };
    const handleCancel = () => {
      this.setState({
        isModalVisible: false,
      });
    };

    const onChange = (e) => {
      console.log("radio checked", e.target.value);
      this.setState({
        value: e.target.value,
      });
    };
    return (
      <React.Fragment>

        <h3>Antd icons</h3>
        <div>
        <FastForwardOutlined  className="antdicons"/>
        <FastForwardOutlined />
        </div>





        <h3>Hello contact</h3>

        <div className="example">
          <Spin />
        </div>


        <div className="site-card-border-less-wrapper">
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>

        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />

        <Button type="primary" danger>
          Primary Button
        </Button>
        <Button type="dashed">Dashed Button</Button>
        <Button>Dashed Button</Button>
        <Button type="text">Dashed Button</Button>
        <Button type="link">Dashed Button</Button>

        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
        <Radio.Group onChange={onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>

        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </React.Fragment>
    );
  }
}
