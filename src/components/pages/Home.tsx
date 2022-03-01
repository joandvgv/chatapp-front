import { Col, Card, Form, Input, Button, Checkbox } from "antd";
import { FunctionComponent } from "react";
import axios from "axios";
import { FullRow } from "../atoms/FullRow";
import { useNavigate } from "react-router-dom";
const endpoint = "https://mjw9mobb43.execute-api.us-east-1.amazonaws.com/users";

type Props = {};

export const Home: FunctionComponent<Props> = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const {
      data: { user },
    } = await axios.post(endpoint, values);

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/chat");
  };

  return (
    <>
      <FullRow align="middle" justify="center">
        <Col>
          <Card title="Welcome" bordered={false} style={{ width: 450 }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Let's chat
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </FullRow>
    </>
  );
};
