import {useState} from "react";
import {Image, Text} from "@tarojs/components";
import {Button, Cell, Col, DatePicker, Row} from '@nutui/nutui-react-taro';
import { Sticky } from '@nutui/nutui-react-taro'
import underConstruction from "../imgs/underConstruction.jpg";

import './history.scss';
import Taro from "@tarojs/taro";

export default function HistorySearch(){

  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState('2012年 01月 01日')

  const confirm1 = (values, options)=>{
    setDesc1(options.map((option) => option.text).join(' '))
  }

  return (
    <div>
      <Image
        src={underConstruction}
        mode='heightFix'
      />

      <Row type='flex' justify='center'>
        <Text>历史查询 </Text>
      </Row>

      <Cell title='提交起始日期：' desc={desc1} onClick={() => setShow1(true)} />
      <DatePicker
        title='日期选择'
        visible={show1}
        isShowChinese
        onCloseDatePicker={() => setShow1(false)}
        onConfirmDatePicker={(values,options) => confirm1(values,options)}
      />

      <Cell title='提交截止日期：' desc={desc1} onClick={() => setShow1(true)} />
      <DatePicker
        title='日期选择'
        visible={show1}
        isShowChinese
        onCloseDatePicker={() => setShow1(false)}
        onConfirmDatePicker={(values,options) => confirm1(values,options)}
      />

      <Sticky bottom={500} position="bottom">
        <Row type='flex' justify='center'>
          <Button type='info' onClick={() => {Taro.navigateTo({url: '/pages/history/history'})}} >
            历史查询
          </Button>
        </Row>
      </Sticky>
    </div>
  )
}
