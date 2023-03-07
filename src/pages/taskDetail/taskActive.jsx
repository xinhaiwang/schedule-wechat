import {Button, Cell, CellGroup, Collapse, CollapseItem, DatePicker, Row, Sticky} from "@nutui/nutui-react-taro";
import {useEffect, useState} from "react";
import Taro, {getCurrentInstance} from "@tarojs/taro";
import {useNavigationBar} from "taro-hooks";
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';
import {fetcher, sendRequest} from "../../fetcher";
import {getOnTapFunction, getTag, getTodayString} from "../lib";

export default function TaskActive(){
  let params = getCurrentInstance().router.params;
  const { data, error } = useSWR(`https://localhost:7199/task/${params.id}`, fetcher)
  console.log("active", data)

  const { trigger, isMutating} = useSWRMutation('https://localhost:7199/updateTaskTime', sendRequest, /* options */)

  const [_, { setTitle }] = useNavigationBar();

  useEffect(() => {
    if (data == null) {
      return
    }
    setTitle(data.name)
  }, [data]);


  const [showActStartTime, setShowActStartTime] = useState(false)
  const [actStartTime, setActStartTime] = useState(data?.actStartTime)


  useEffect(() => { setActStartTime(data?.actStartTime); }, [data])

  const confirmActStartTime = (values)=>{
    const date = values.slice(0, 3).join('-');
    const time = values.slice(3).join(':');
    setActStartTime(`${date  } ${  time}`)
  }
  async function handleClick(){

    try {
      const res = await trigger({...data, actStartTime: actStartTime, actEndTime: getTodayString()})
      if (res && !res.ok) {
        throw new Error('提交失败!');
      } else {
        await Taro.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })
      }
    } catch (e) {
      await Taro.showToast({
        title: '提交失败',
        icon: 'error',
        duration: 2000
      })
    }
  }

  const minDate = new Date(2023, 0, 1)



  return (
    <>
      <CellGroup title='开始'>
        <Cell title='最早' desc={data?.earlyStartTime} />
        <Cell title='最晚' desc={data?.lateStartTime} />
        <Cell title='实际' desc={actStartTime} onClick={() => setShowActStartTime(true)} />
        <DatePicker
          title='时间选择'
          type='datetime'
          // modelValue={actStartTime}
          minDate={minDate}
          visible={showActStartTime}
          onCloseDatePicker={() => setShowActStartTime(false)}
          onConfirmDatePicker={(values,options) => confirmActStartTime(values,options)}
        />
      </CellGroup>

      <CellGroup title='结束'>
        <Cell title='最早' desc={data?.earlyEndTime} />
        <Cell title='最晚' desc={data?.lateEndTime} />
      </CellGroup>

      <Row type='flex' justify='center'>
        <div style='padding-right: 10px'>
          {getTag(data?.statusCode, data?.activationCode)}
        </div>
      </Row>

      <CellGroup title='资源'>
        <Collapse activeName={[]} icon='arrow-down' iconSize='16' iconColor='#999'>
          <CollapseItem title='资源一' name='1'>
            <CellGroup>
              <Cell title='资源名称' desc='资源一' />
              <Cell title='目标用量' desc='10' />
              <Cell title='实际用量' desc='10' />
              <Cell title='计划开始使用时间' desc='2023-01-01 08:30' />
              <Cell title='计划结束使用时间' desc='2023-01-01 08:30' />
              <Cell title='实际开始使用时间' desc='2023-01-01 08:30' />
              <Cell title='实际结束使用时间' desc='2023-01-01 08:30' />
            </CellGroup>
          </CollapseItem>
          <CollapseItem title='资源二' name='2'>
            <CellGroup>
              <Cell title='资源名称' desc='资源一' />
              <Cell title='目标用量' desc='10' />
              <Cell title='实际用量' desc='10' />
              <Cell title='计划开始使用时间' desc='2023-01-01 08:30' />
              <Cell title='计划结束使用时间' desc='2023-01-01 08:30' />
              <Cell title='实际开始使用时间' desc='2023-01-01 08:30' />
              <Cell title='实际结束使用时间' desc='2023-01-01 08:30' />
            </CellGroup>
          </CollapseItem>
        </Collapse>

        <Row type='flex' justify='center'>
          <Button type='info' onClick={handleClick}>
            完成工作
          </Button>
        </Row>
      </CellGroup>
    </>
  )
}
