import React, { useState } from 'react';
import { Form, Button, InputNumber } from 'antd';


const AddAB = () => {
    let a,b;
    const [out, setOut] = useState('');
    const onSubmitForm = () => {
        const url = 'http://localhost:5050/api/training/addAB';
        setOut(parseInt(a) + parseInt(b) + '');
        const data = { a, b, output : parseInt(a) + parseInt(b) + '' };
        console.log(data);
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(res));
    }
    const handleseta = v => {
        a = v;
        console.log(v);

    }

    const handlesetb = v => {
        b = v;
        console.log(v);
    }
    
    const Input = () => {
        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Nhập số A"
                    rules={[{ required: true, message: 'a = ' }]}
                >
                    <InputNumber type={'number'} onChange = {handleseta}/>
                </Form.Item>

                <Form.Item
                    label="Nhập số B"
                    rules={[{ required: true, message: 'b = ' }]}
                >
                   <InputNumber type={'number'} onChange = {handlesetb}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" onClick={onSubmitForm} >
                        Cộng
                    </Button>
                </Form.Item>
            </Form>
        );
    };
    
    const Sum = (a , b) =>
    {
        return a + b;
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div >
                    <p>Cong A va B</p>
                    <Input/>
                </div>
                <div>
                    <h4>Tổng {`${out}`}</h4>
                </div>
            </div>
        </>
    )
};
export default AddAB; 