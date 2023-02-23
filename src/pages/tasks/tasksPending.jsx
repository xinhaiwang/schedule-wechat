import {Cell, CellGroup, TabPane, Tabs} from "@nutui/nutui-react-taro";
import {useState} from "react";
import Taro from "@tarojs/taro";
import {Image} from "@tarojs/components";
import useSWR from "swr";
import safetyFirst from "../imgs/anquan.jpg";
import {fetcher} from "../../fetcher";

export default function TasksPending(){
  const { data: tasks, error } = useSWR(`https://localhost:7199/tasks?start=${getDay(0)}&end=${getDay(30)}`, fetcher);
  console.log("tasks",tasks);


  const [tabValue, setTabValue] = useState('0');

  function getDay(days){
    const result = new Date();
    result.setDate(result.getDate() + days);
    return result.toISOString().slice(0, 10);
  }

  return (
    <>
      <Image
        src={safetyFirst}
        mode='widthFix'
        style='width: 100%'
      />
      <Tabs
        value={tabValue}
        onChange={({ paneKey }) => {setTabValue(paneKey)}}
      >
        <TabPane title='一天内'>
          <CellGroup>
            {
              tasks?.filter(t => t.earlyStartTime === getDay(0)).map(({id, name, earlyStartTime}) => (
                <Cell title={name} desc={earlyStartTime} onClick={()=> Taro.navigateTo({url: `/pages/history/historyDetail?id=${id}`})} />
              ))
            }
          </CellGroup>
        </TabPane>
        <TabPane title='一周内'>
          <CellGroup>
            {
              tasks?.filter(t => t.earlyStartTime < getDay(7)).map(({id, name, earlyStartTime}) => (
                <Cell title={name} desc={earlyStartTime} onClick={()=> Taro.navigateTo({url: `/pages/history/historyDetail?id=${id}`})} />
              ))
            }
          </CellGroup>
        </TabPane>
        <TabPane title='一月内'>
          <CellGroup>
            {
              tasks?.filter(t => t.earlyStartTime < getDay(30)).map(({id, name, earlyStartTime}) => (
                <Cell title={name} desc={earlyStartTime} onClick={()=> Taro.navigateTo({url: `/pages/history/historyDetail?id=${id}`})} />
              ))
            }
          </CellGroup>
        </TabPane>
      </Tabs>
    </>
  );
};
