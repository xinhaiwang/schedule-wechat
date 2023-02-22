import {useState} from "react";
import {Image, Text} from "@tarojs/components";
import {Button, Cell, Col, DatePicker, Row} from '@nutui/nutui-react-taro';
import Taro from "@tarojs/taro";
import underConstruction from "../imgs/underConstruction.jpg";

import './history.scss';

export default function HistorySearch(){

  const [showStart, setShowStart] = useState(false)
  const [start, setStart] = useState('2023-01-01')

  const [showEnd, setShowEnd] = useState(false)
  const [end, setEnd] = useState('2023-12-31')

  const confirmStart = (values, options)=>{
    setStart(options.map((option) => option.text).join('-'))
  }
  const confirmEnd = (values, options)=>{
    setEnd(options.map((option) => option.text).join('-'))
  }

  function handleClick(){
    Taro.navigateTo({url: `/pages/history/historyList?start=${start}&end=${end}`})
  }

  return (
    <div >
      <Image
        src={underConstruction}
        mode='heightFix'
      />

      <Row type='flex' justify='center'>
        <Text>历史查询 </Text>
      </Row>

      <Col type='flex' align='end'>
        <Cell title='提交起始日期：' desc={start} onClick={() => setShowStart(true)} />
        <DatePicker
          title='日期选择'
          visible={showStart}
          onCloseDatePicker={() => setShowStart(false)}
          onConfirmDatePicker={(values,options) => confirmStart(values,options)}
        />

        <Cell title='提交截止日期：' desc={end} onClick={() => setShowEnd(true)} />
        <DatePicker
          title='日期选择'
          visible={showEnd}
          onCloseDatePicker={() => setShowEnd(false)}
          onConfirmDatePicker={(values,options) => confirmEnd(values,options)}
        />

        <Row type='flex' justify='center' align='end'>
          <Button type='info' onClick={handleClick} >
            历史查询
          </Button>
        </Row>
      </Col>

    </div>
  )
}
