import React, { useState, useEffect } from 'react';
import { List, Form, Button, InputNumber, Select } from 'antd';
import Sort from '../../../algorithm/sort';

//useEffect(() => {LogEff}, [arr]);
const SortArray = () => {
    let a;
    let list = ["selection", "insertion", "binaryinsert", "bubble", "shaker", "shell", "merge", "counting", "radix", "flash", "quick"]
    const [arr, setArr] = useState([]);
    let typesort = 'selection';

    const SelectTypeSort = () => {
        const { Option } = Select;
        function handleChange(value) {
            console.log(value);
            //setTypesort(value.value);
            typesort = value.value;
        }
        const listType = list.map((e) =>
            <Option value={`${e}`}> {`${e} sort`}</Option>
        );
        return (
            <Select
                labelInValue
                defaultValue={{ value: 'selection' }}
                style={{ width: 180 }}
                onChange={handleChange}
            >
                {/* <Option value="selection">Selection Sort</Option>
                <Option value="insertion">Insertion Sort</Option>
                <Option value="binaryinsert">Binary Insertion Sort</Option>
                <Option value="bubble">Bubble Sort</Option>
                <Option value="shaker">Shaker Sort</Option>
                <Option value="shell">Shell Sort</Option>
                <Option value="merge"> Merge Sort</Option>
                <Option value="counting">Counting Sort</Option>
                <Option value="radix">Radix Sort</Option>
                <Option value="quick">Quick Sort</Option>
                <Option value="flash">Flash Sort</Option> */}
                {
                    listType
                }
            </Select>
        );
    }
    const onSortArray = () => {
        const url = 'http://localhost:5050/api/training/sort';
        let arrsort = [...arr];
        let name = typesort + 'Sort';
        console.log(name);
        setArr(Sort.quickSort(arrsort));
        console.log(arrsort);
        const data = { arr, typesort, arrsort };
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
        console.log(arr);
    }

    //useEffect(() => {setArr(arr); console.log(arr)}, [arr]);

    const onAdd = () => {
        setArr([...arr, a]);
        console.log(arr);
    }
    const handleseta = v => {
        a = v;
        console.log(v);
    }

    const Array = () => {
        return (
            <div className='my-[20px]'>
                <List
                    size="small"
                    header={<div>Mảng</div>}
                    bordered
                    dataSource={arr}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>)
    }

    const Input = () => {
        return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}

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
                    <Input />
                </div>
                <Array />
                <SelectTypeSort />
                <Button type="primary" onClick={onSortArray} >
                    Sort
                </Button>
            </div>
        </>
    )
};
export default SortArray; 