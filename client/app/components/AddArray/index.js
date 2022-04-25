import React, { useState, useMemo } from 'react';
import {List, Form, Button, InputNumber } from 'antd';


const AddArray = () => {
    let a;
    const [arr, setArr] = useState([]);
    const [out, setOut] = useState(0);
    const onSumArray = () => {
        const url = 'http://localhost:5050/api/training/addArray';
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        setOut(sum);
        const data = { arr, sum };
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
    const onAdd = () => {
        setArr([...arr, a]);
    }
    const handleseta = v => {
        a = v;
        console.log(v);

    }

    const ListArray = () =>
    {

    }
    
    const Demo = () => {
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
                    label="Nhập số"
                    rules={[{ required: true, message: 'a = ' }]}
                >
                    <InputNumber type={'number'} onChange={handleseta} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" onClick={onAdd} >
                        Thêm
                    </Button>
                </Form.Item>
            </Form>
        );
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div >
                    <p>Thêm vào mảng</p>
                    <Demo />
                </div>
                <List
                    size="small"
                    header={<div>Mảng</div>}
                    bordered
                    dataSource={arr}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
                 <Button type="primary" onClick={onSumArray} >
                        Tính tổng
                </Button>
                <div>
                    <h4>Tổng {`${out}`}</h4>
                </div>
            </div>
        </>
    )
};
export default AddArray; 