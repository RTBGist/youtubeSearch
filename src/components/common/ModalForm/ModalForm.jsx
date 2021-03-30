import React, {useEffect} from "react"
import {Button, Col, Form, Input, InputNumber, Select, Slider, Row} from "antd";
import Modal from "antd/es/modal/Modal";
import styles from "./ModalForm.module.css"


const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};


const ModalForm = ({isModalVisible, hideModal, queryDisabled = false, queryParams, onSubmitForm, formTitle, formButton}) => {
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
          className={styles.form}
          form={form}
          name="basic"
          initialValues={queryParams}
          onFinish={onFinish}

        >
          <div className={styles.formTitle}>{formTitle}</div>
          <Form.Item
            className={styles.formItem}
            {...layout}
            label="Запрос"
            name="query"
            rules={[{ required: true, message: "Пожалуйста введите запрос" }]}
          >
            <Input disabled={queryDisabled} />
          </Form.Item>

          <Form.Item
            className={styles.formItem}
            {...layout}
            label="Название"
            name="queryTitle"
            rules={[{ required: true, message: "Пожалуйста введите название" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className={styles.formItem}
            name="filterBy"
            label="Сортировать по"
            {...layout}
          >
            <Select  style={{ width: '100%' }}>
              <Option value="relevance">По релевантности</Option>
              <Option value="date">По дате загрузки</Option>
              <Option value="viewCount">По числу просмотров</Option>
              <Option value="rating">По рейтингу</Option>
              <Option value="title">По алфавиту</Option>
              <Option value="videoCount">По количеству загруженных видео</Option>
            </Select>
          </Form.Item>


          <Row>
            <Col span={24}>
              <div className={styles.formDescr}>Максимальное количество:</div>
            </Col>
            <Col span={20}>
              <Form.Item
                name="maxCount"
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


          <Button type="primary" htmlType="submit">
            {formButton}
          </Button>
        </Form>
      </Modal>
    </>
  )
};




export default ModalForm;