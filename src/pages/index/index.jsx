import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import useSWR from "swr";
import React, {useCallback, useEffect, useState} from "react";
import {getOnTapFunction, getTag} from "../lib";
import Taro, {useDidShow} from "@tarojs/taro";
import { VirtualList } from '@nutui/nutui-react-taro';


import './index.scss'
const Index = () => {

  const itemSize = 50;
  const height = 500;

  // const { data: tasks, error, isLoading: initLoading } = useSWR('https://localhost:7199/tasks', fetcher);

  const [isLoading, setIsLoading] = useState(false);
  const [sourceData, setSourceData] = useState([])
  const [pageNo, setPageNo] = useState(1);

  // useEffect(() => {
  //   if (tasks != null){
  //     setSourceData(tasks)
  //   }
  // }, [tasks])
  function onScroll() {
    if (isLoading){
      return
    }

    Taro.showLoading()
    setIsLoading(true)
    setTimeout(async () => {
        await getData(sourceData.length)
      setIsLoading(false)
      Taro.hideLoading()
    }, 30)

    // if (!isLoading && scrollDirection === 'forward' && scrollOffset > )

  }

  useDidShow(() => {getData()})

  async function getData(offset = 0){
    console.log("offset", offset)

    const res = await Taro.request({url: `https://localhost:7199/tasks?offset=${offset}`})
    setSourceData((sourceData) => {
      return [...sourceData, ...res.data]
    })
  }

  // useEffect(() => {
  //   getData()
  // }, [getData])


  const Row = React.memo(({ data }) => {
    return (
      <Cell iconSlot={getTag(data?.statusCode, data?.activationCode)} title={data?.name} desc={data?.actEndTime} onClick={getOnTapFunction(data?.id, data?.statusCode, data?.activationCode)} />
    )
  })


  return (
    <>
      {/*<CellGroup>*/}
      {/*  {*/}
      {/*    tasks?.map(function({id, name, actEndTime, statusCode, activationCode}){*/}
      {/*      return (<Cell iconSlot={getTag(statusCode, activationCode)} title={name} desc={actEndTime} onClick={getOnTapFunction(id, statusCode, activationCode)} />);*/}
      {/*  })*/}
      {/*  }*/}
      {/*</CellGroup>*/}
      <VirtualList
        itemSize={50}
        sourceData={sourceData}
        ItemRender={Row}
        onScroll={onScroll}
      />
    </>
  )
};

export default Index;
