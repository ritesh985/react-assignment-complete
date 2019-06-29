import React from 'react';
import { Modal, Form, Input } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line

  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, name, phone, email, website } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

      return (
        <Modal visible={visible} title="Basic Modal" okText="Ok" onCancel={onCancel} onOk={onCreate}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                initialValue: name,
                rules: [
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ],
              })(<Input />)}
            </Form.Item>

            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                initialValue: email,
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Phone">
              {getFieldDecorator('phone', {
                initialValue: phone,
                rules: [
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ],
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Website">
              {getFieldDecorator('website', {
                initialValue: website,
                rules: [
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

export default CollectionCreateForm;
