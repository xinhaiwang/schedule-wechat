import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import useSWR from "swr";
import {fetcher} from "../../fetcher";
import {getOnTapFunction, getTag} from "../lib";

import './index.scss'
import {useCallback, useState} from "react";
import Taro from "@tarojs/taro";

const Index = () => {

  const itemSize = 100;

  const { data: tasks, error } = useSWR('https://localhost:7199/tasks', fetcher);

  const [isLoading, setIsLoading] = useState(false);

  // function onScroll({scrollDirection, scrollOffset}) {
  //
  //   if (!isLoading && scrollDirection === 'forward' && scrollOffset > )
  //
  // }
  //
  // const getData = useCallback(async () => {
  //   const datas = []
  //   const pageSize = 90
  //   const res = await Taro.request({url: `https://localhost:7199/${tasks}`})
  //   Taro.request({url}).then(res => res.data)
  //   for (let i = 10; i < pageSize; i++) {
  //     datas.push(`${i} Item`)
  //   }
  //   setsourceData((sourceData) => {
  //     return [...sourceData, ...datas]
  //   })
  // }, [])


  return (
    <>
      <CellGroup>
        {
          tasks?.map(function({id, name, actEndTime, statusCode, activationCode}){
            return (<Cell iconSlot={getTag(statusCode, activationCode)} title={name} desc={actEndTime} onClick={getOnTapFunction(id, statusCode, activationCode)} />);
        })
        }
      </CellGroup>
    </>
  )
};

export default Index;
