import { useEffect, useState } from 'react'
import './page.css'
import { Card, Form, Checkbox, Switch, Input, Upload, Select, InputNumber, DatePicker, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import traineeship from '../assets/images/traineeship.png'

const version = 1.0
const programId = 'ats'
const URL = 'http://127.0.0.1:4010/api/'+version+'/programs/'+programId+'/application-form'

function Details() {
    const [results, setResults] = useState([])
    const controller = new AbortController()

    useEffect(() => {
        async function getData() {
            const response = await fetch(URL)
            const data = await response.json()
            setResults(data)
        }
        getData()

        console.log(results)
        // console.log(results.data.attributes)

        return () => {
            controller.abort()
        }
    }, [])

    const liType = () => {
        // return results.data.type
        // return console.log(results.data.type)
        return results
    }

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
          return e
        }
        return e?.fileList
    }

    const [isSelected, setIsSelected] = useState('default')
    const onSelectOption = (e: any) => {
        setIsSelected(e)
        return e
    }

    // const [isShow, setIsShow] = useState(false)
    // const onShow = (e) => {
    //     // console.log(e)
    //     setIsShow(e)
    //     return e
    // }

    const onReset = () => {
        alert('Resetted')
        return console.log("Resetted")
    }

    const onSubmit = () => {
        alert('Submitted')
        return console.log("Submitted")
    }

    return (
    <>
        <h1>Details Page</h1>

        <div className='content'>
            <nav>
                <ul>
                    <li onClick={liType}>Program Details</li>
                    <li onClick={liType} className='active'>Application Form</li>{/* title={results.data.type} */}
                    <li onClick={liType}>Workflow</li>
                    <li onClick={liType}>Preview</li>
                </ul>
            </nav>

            <div className='content-data'>
                <Card type='inner' title="Application Form" style={{width: 500, marginTop: '10px',}}>
                    {/* Upload Image */}
                    <Card type='inner' headStyle={{backgroundColor: 'lightblue'}} title='Upload Cover Image'>
                        <Form layout="horizontal" style={{maxWidth: 600, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                                <Upload action={traineeship} listType="picture-card">
                                    {/* action={results.data.attributes.coverImage} */}
                                    <div>
                                        <UploadOutlined style={{ fontSize: '25px',}} />
                                        <div style={{marginTop: 8,}}>
                                            Upload
                                            {/* <h3>Upload</h3>
                                            <span>16:9 ratio is recommended. Max image size 1mb</span> */}
                                        </div>
                                    </div>
                                </Upload>
                            </Form.Item>
                        </Form>
                    </Card>

                    {/* Personal Information */}
                    <Card type='inner' headStyle={{backgroundColor: 'lightblue'}} title='Personal Information' style={{marginTop: 10}}>
                        <Form layout="horizontal" style={{maxWidth: 600,}}>
                            <Form.Item label="First Name">
                                <Input className='input-sizing' />
                            </Form.Item>
                            <Form.Item label="Last Name">
                                <Input className='input-sizing' />
                            </Form.Item>
                            <Form.Item label="Email Id">
                                <Input className='input-sizing' style={{marginLeft: 15,}} />
                            </Form.Item>
                            <Form.Item label="Phone Number (Without dial code)">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch checkedChildren='Show' unCheckedChildren='Hide' id='phoneNumber'></Switch>
                                </span>
                            </Form.Item>
                            <Form.Item label="Nationality">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch id='nationality' checkedChildren='Show' unCheckedChildren='Hide'></Switch>
                                </span>
                            </Form.Item>
                            <Form.Item label="Current Residence">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch id='currentResidence' checkedChildren='Show' unCheckedChildren='Hide'></Switch>
                                </span>
                            </Form.Item>
                            <Form.Item label="ID Number">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch id='idNumber' checkedChildren='Show' unCheckedChildren='Hide'></Switch>
                                </span>
                            </Form.Item>
                            <Form.Item label="Date of Birth">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch id='dateOfBirth' checkedChildren='Show' unCheckedChildren='Hide'></Switch>
                                </span>
                            </Form.Item>
                            <Form.Item label="Gender">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch id='gender' checkedChildren='Show' unCheckedChildren='Hide'></Switch>
                                </span>
                            </Form.Item>
                        </Form>
                    </Card>

                    {/* Questions */}
                    <Card type='inner' headStyle={{backgroundColor: 'lightblue'}} title='Questions' style={{marginTop: 10}}>
                        <Form layout="horizontal" style={{maxWidth: 600,}}>
                            {/* Type of questions */}
                            <Form.Item className='input-sizing' label="Type">
                                <Select onChange={onSelectOption}>
                                    <Select.Option defaultChecked disabled value="default">Select</Select.Option>
                                    <Select.Option value="paragraph">Paragraph</Select.Option>
                                    <Select.Option value="short answer">Short answer</Select.Option>
                                    <Select.Option value="yes/no">Yes/no</Select.Option>
                                    <Select.Option value="dropdown">Dropdown</Select.Option>
                                    <Select.Option value="multiple choice">Multiple choice</Select.Option>
                                    <Select.Option value="date">Date</Select.Option>
                                    <Select.Option value="number">Number</Select.Option>
                                    <Select.Option value="file upload">File upload</Select.Option>
                                    <Select.Option value="video question">Video question</Select.Option>
                                </Select>
                                {/* Paragraph Type Question */}
                                <div className={isSelected == 'paragraph'? 'paragraph': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        <label htmlFor='paragraph'>Question</label>
                                        <Input id='paragraph' />
                                    </Form.Item>
                                </div>
                                {/* Short answer Type Question */}
                                <div className={isSelected == 'short answer'? 'shortanswer': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        <label htmlFor='shortanswer'>Question</label>
                                        <Input id='shortanswer' />
                                    </Form.Item>
                                </div>
                                {/* Yes/no Type Question */}
                                <div className={isSelected == 'yes/no'? 'yesno': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        <label htmlFor='yesno'>Question</label>
                                        <Input id='yesno' />
                                    </Form.Item>
                                </div>
                                {/* Dropdown Type Question */}
                                <div className={isSelected == 'dropdown'? 'dropdown': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        <label htmlFor='dropdown'>Question</label>
                                        <Input id='dropdown' />
                                    </Form.Item>
                                </div>
                                {/* Multiple choice Type Question */}
                                <div className={isSelected == 'multiple choice'? 'multiplechoice': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        <label htmlFor='multiplechoice'>Question</label>
                                        <Input id='multiplechoice' />
                                    </Form.Item>
                                </div>
                                {/* Date Type Question */}
                                <div className={isSelected == 'date'? 'date': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        <label htmlFor='date'>Question</label>
                                        <DatePicker id='date' />
                                    </Form.Item>
                                </div>
                                {/* Number Type Question */}
                                <div className={isSelected == 'number'? 'number': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        <label htmlFor='number'>Question</label>
                                        <InputNumber min={0} id='number' />
                                    </Form.Item>
                                </div>
                                {/* File Type Question */}
                                <div className={isSelected == 'file'? 'file': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        {/* <label htmlFor='file'>Question</label>
                                        <input type='file' id='file' /> */}
                                        <label htmlFor='file'>Question</label>
                                        <Input id='file' />
                                    </Form.Item>
                                </div>
                                {/* Video Type Question */}
                                <div className={isSelected == 'video'? 'video': 'hide'} style={{marginTop: 20,}}>
                                    <Form.Item>
                                        <label htmlFor='video'>Question</label>
                                        <Input id='video' />
                                    </Form.Item>
                                </div>
                            </Form.Item>
                        </Form>
                    </Card>

                    {/* Profile */}
                    <Card type='inner' headStyle={{backgroundColor: 'lightblue'}} title='Profile' style={{marginTop: 10}}>
                        <Form layout="horizontal" style={{maxWidth: 600,}}>
                            <Form.Item label="Education">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch id='education' checkedChildren='Show' unCheckedChildren='Hide'></Switch>
                                </span>
                            </Form.Item>

                            <Form.Item label="Experience">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch id='experience' checkedChildren='Show' unCheckedChildren='Hide'></Switch>
                                </span>
                            </Form.Item>

                            <Form.Item label="Resume">
                                <span className='spanning'>
                                    <Checkbox>Internal Use</Checkbox>
                                    <Switch id='resume' checkedChildren='Show' unCheckedChildren='Hide'></Switch>
                                </span>
                            </Form.Item>
                        </Form>
                    </Card>
                    <div style={{marginTop: 10, float: 'right'}}>
                        <Button onClick={onReset} style={{marginLeft: 10,}} danger>Reset</Button>
                        <Button onClick={onSubmit} style={{marginLeft: 10,}} type='primary'>Submit</Button>
                    </div>
                </Card>
            </div>
        </div>
    </>
  )
}

export default Details