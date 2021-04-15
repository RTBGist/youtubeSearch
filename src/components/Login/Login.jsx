import React from 'react'
import {Form, Input, Button, Row, Col} from 'antd';
import styles from './Login.module.css'
import {Redirect} from "react-router-dom";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};

const Login = (props) => {
  const onFinish = (values) => {
    props.loginMe(values.username, values.password)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if(props.isAuth) {
    return <Redirect to={'/'} />
  }

  return (
    <Row className={styles.formWrapper} align="middle">
      <Col flex="auto">
        <Form
          {...layout}
          name="basic"
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={styles.form}
        >

          <Row>
            <Col flex="auto">
              <div className={styles.formTitle}>Вход</div>
            </Col>
          </Row>

          <Row>
            <Col flex="auto">
              <div className={styles.formInfo}>
                <div className={styles.formInfoItem}>
                  test
                  test
                </div>
                <div className={styles.formInfoItem}>
                  test2
                  test
                </div>
                <div className={styles.formInfoItem}>
                  test3
                  test
                </div>
              </div>
            </Col>
          </Row>

          <Form.Item
            className={styles.formItem}
            label="Логин"
            name="username"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите ваше имя',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className={styles.formItem}
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите пароль',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {props.errorFormMessage && <div>{props.errorFormMessage}</div>}


          <Form.Item {...tailLayout} className={styles.formItem}>
            <Button disabled={props.isSubmitting} type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Login;