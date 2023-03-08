import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import useSWR from "swr";
import VirtualList from '@tarojs/components/virtual-list'
import React, {useCallback, useEffect, useState} from "react";
import {getOnTapFunction, getTag} from "../lib";
import Taro from "@tarojs/taro";

import './index.scss'
const Index = () => {

  const itemSize = 50;
  const height = 500;

  // const { data: tasks, error, isLoading: initLoading } = useSWR('https://localhost:7199/tasks', fetcher);

  const [isLoading, setIsLoading] = useState(false);
  const [sourceData, setSourceData] = useState([])
  const [historyData, setHistoryData] = useState([])

  // useEffect(() => {
  //   if (tasks != null){
  //     setSourceData(tasks)
  //   }
  // }, [tasks])
  function onScroll({scrollDirection, scrollOffset}) {
    if (isLoading){
      return
    }


    if (scrollDirection !== 'forward'){
      return
    }

    console.log("scrollOffset", scrollOffset)

    if (scrollOffset < (sourceData.length - 10) * itemSize + 50) {
      return
    }

    Taro.showLoading()
    setIsLoading(true)
    setTimeout(async () => {
      if (scrollDirection === 'forward') {
        await buildData(sourceData.length)
      } else {
        // await  buildData(historyData.length)
      }
      setIsLoading(false)
      Taro.hideLoading()
    }, 1000)

    // if (!isLoading && scrollDirection === 'forward' && scrollOffset > )

  }

  async function buildData(offset = 0){
    console.log("offset", offset)

    const res = await Taro.request({url: `https://localhost:7199/tasks?offset=${offset}`})
    setSourceData((sourceData) => {
      // if (offset < 0){
        // console.log("--data", res.data)
        // setHistoryData([...historyData, ...res.data])
      //   return [...res.data, ...sourceData]
      // } else {
        return [...sourceData, ...res.data]
      // }
    })
  }

  // useEffect(() => {
  //   buildData()
  // }, [buildData])


  const Row = React.memo(({ id, index, data }) => {
    return (
      <Cell id={id} iconSlot={getTag(data[index]?.statusCode, data[index]?.activationCode)} title={data[index]?.name} desc={data[index]?.actEndTime} onClick={getOnTapFunction(data[index]?.id, data[index]?.statusCode, data[index]?.activationCode)} />
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
        height={height}
        itemSize={itemSize}
        item={Row}
        itemData={sourceData}
        itemCount={sourceData.length}
        width='100%'
        onScroll={onScroll}
      />
    </>
  )
};

export default Index;
