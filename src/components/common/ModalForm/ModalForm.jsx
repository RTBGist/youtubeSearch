import React, {useEffect} from 'react'
import {Button, Col, Form, Input, InputNumber, Select, Slider, Row} from "antd";
import Modal from "antd/es/modal/Modal";


const ModalForm = ({isModalVisible, hideModal, queryDisabled = false, queryParams, onSubmitForm}) => {
  const [form] = Form.useForm();
  const {Option} = Select;

  // update form when queryParams when changed
  useEffect(() => {
      form.setFieldsValue({...queryParams})
    }, [queryParams, form])

  const onFinish = (values) => {
    onSubmitForm(values, queryParams.position)

    hideModal()
  }

  const onCancel = () => {
    hideModal()
  }


  const onChangeSliderValue = (value) => {
    form.setFieldsValue({maxCount: value})
  }

  return (
    <>
      <Modal onCancel={onCancel} visible={isModalVisible} footer={null} forceRender>
        <Form
          form={form}
          name="basic"
          initialValues={queryParams}
          onFinish={onFinish}

        >
          <Form.Item
            label="Запрос"
            name="query"
            rules={[{ required: true, message: 'Пожалуйста введите запрос' }]}
          >
            <Input disabled={queryDisabled} />
          </Form.Item>

          <Form.Item
            label="Название"
            name="queryTitle"
            rules={[{ required: true, message: 'Пожалуйста введите название' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="filterBy"
            label="Сортировать по"
          >
            <Select  style={{ width: 120 }}>
              <Option value="relevance">По релевантности</Option>
              <Option value="date">По дате загрузки</Option>
              <Option value="viewCount">По числу просмотров</Option>
              <Option value="rating">По рейтингу</Option>
              <Option value="title">По алфавиту</Option>
              <Option value="videoCount">По количеству загруженных видео</Option>
            </Select>
          </Form.Item>


          <Row>
            <Col span={20}>
              <Form.Item
                name="maxCount"
                label="Максимальное количество"
              >
                <Slider
                  min={1}
                  max={50}
                  onChange={onChangeSliderValue}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="maxCount"
              >
              <InputNumber
                min={1}
                max={50}
                onChange={onChangeSliderValue}
              />
              </Form.Item>
            </Col>
          </Row>




          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
};




export default ModalForm;