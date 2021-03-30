import {Button, Form, Input, Row, Col} from "antd";
import React, {useEffect} from "react";
import styles from "./Search.module.css"
import HeartIcn from "../../../assets/images/heart.svg"
import {Link} from "react-router-dom";


const Search = (props) => {
  const [form] = Form.useForm();

  // update query name in form
  useEffect(() => {
    form.setFieldsValue({search: props.queryParams.query})

    return () => {
      props.clearParamsPosts()
    }
  }, [])

  const onFinish = (values) => {
    const newQueryParams = {...props.queryParams, query: values.search}
    props.setQueryParams(newQueryParams)
    props.getPosts(newQueryParams)
  };


  const saveSearch = () => {
    form.validateFields(['search']).then((response) => {
      if(response['search']) {
        const newQueryParams = {...props.queryParams, query: response['search']};
        props.setQueryParams(newQueryParams)
        props.showModal()
      }
    })
  }

  return (
    <Row className={props.searchResult ? styles.searchWrapper + ' ' + styles.searchWrapperWithResult : styles.searchWrapper}>
      <Col flex="100%">
        <div className={styles.searchHeader}>Поиск видео</div>
        <Form
          form={form}
          name="basic"
          initialValues={{search: props.queryParams.query}}
          onFinish={onFinish}
        >
          <Row>
            <Col span="20" className={styles.searchLine}>
              <Form.Item
                name="search"
                rules={[
                  {
                    required: true,
                    message: 'Строка не должна быть пустой',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <div className={styles.saveSearchWrapper}>
                <span className={styles.saveSearchIcn} onClick={saveSearch}>
                  <img src={HeartIcn} alt="Save"/>
                </span>
                <div className={styles.saveSearchText}>
                  Поиск сохранён в разделе «Избранное»
                  <Link to="/favorites/">Перейти в избранное</Link>
                </div>
              </div>


            </Col>
            <Col span="4">
              <Form.Item className={styles.formItem}>
                <Button type="primary" htmlType="submit">
                  Найти
                </Button>
              </Form.Item>
            </Col>
          </Row>




        </Form>
      </Col>
    </Row>
  )
};

export default Search