import {Cell, TabPane, Tabs} from "@nutui/nutui-react-taro";
import {useState} from "react";
import Taro from "@tarojs/taro";
import {Image} from "@tarojs/components";
import  safetyFirst from "../imgs/anquan.jpg";

export default function TasksPending(){

  const [tabValue, setTabValue] = useState('0');

  return (
    <>
      <Image src={safetyFirst} mode='heightFix' />
      <Tabs
        value={tabValue}
        onChange={({ paneKey }) => {setTabValue(paneKey)}}
      >
        <TabPane title='一天内'>
          <Cell
            title='钢筋1'
            onClick={()=> {Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})}}
          >
          </Cell>
        </TabPane>
        <TabPane title='一周内'>
          <Cell
            title='钢筋1'
            onClick={()=> {Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})}}
          >
          </Cell>
          <Cell
            title='钢筋2'
            onClick={()=> {Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})}}
          >
          </Cell>
        </TabPane>
        <TabPane title='一月内'>
          <Cell
            title='钢筋1'
            onClick={()=> {Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})}}
          >
          </Cell>
          <Cell
            title='钢筋2'
            onClick={()=> {Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})}}
          >
          </Cell>
          <Cell
            title='钢筋2'
            onClick={()=> {Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})}}
          >
          </Cell>
        </TabPane>
      </Tabs>
    </>
  );
};
