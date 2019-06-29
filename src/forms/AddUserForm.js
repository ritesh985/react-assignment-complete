import React from 'react';
import { Form, Input, Button } from 'antd';

class AddUSerForm extends React.Component {
  handleSubmit = (e) => {
    const { form, newUserEntry, count } = this.props;
    e.preventDefault();

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        newUserEntry(values, count);

        form.resetFields();
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xl: { span: 6 },
        lg: { span: 6 },
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xl: {
          span: 12,
        },
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <section style={{ padding: '25px 50px' }}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'This field is required!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Username">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'This field is required!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
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
              rules: [
                {
                  required: true,
                  message: 'This field is required!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Address" required style={{ marginBottom: 0 }}>
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              {getFieldDecorator('address.suite', {
                rules: [
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ],
              })(<Input placeholder="Apt no., Suite,..." />)}
            </Form.Item>
            <span style={{ display: 'inline-block', width: '15px', textAlign: 'center' }} />
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              {getFieldDecorator('address.street', {
                rules: [
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ],
              })(<Input placeholder="Street" />)}
            </Form.Item>

            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              {getFieldDecorator('address.city', {
                rules: [
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ],
              })(<Input placeholder="City" />)}
            </Form.Item>
            <span style={{ display: 'inline-block', width: '15px' }} />
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              {getFieldDecorator('address.zipcode', {
                rules: [
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ],
              })(<Input placeholder="Zipcode" />)}
            </Form.Item>
          </Form.Item>
          <Form.Item label="Website">
            {getFieldDecorator('website', {
              rules: [
                {
                  required: true,
                  message: 'This field is required!',
                },
              ],
            })(<Input addonBefore="https://" />)}
          </Form.Item>
          <Form.Item required label="Company">
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              {getFieldDecorator('company.name', {
                rules: [
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ],
              })(<Input placeholder="Company Name" />)}
            </Form.Item>
            <span style={{ display: 'inline-block', width: '15px' }} />
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              {getFieldDecorator('company.bs', {
                rules: [
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ],
              })(<Input placeholder="Company BS" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('company.catchPhrase', {
                rules: [
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ],
              })(<Input placeholder="Company Catch Phrase" />)}
            </Form.Item>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{ marginLeft: '150px' }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(AddUSerForm);
export default WrappedRegistrationForm;
