import {Button, Cell, CellGroup, Collapse, CollapseItem, DatePicker, Row, Sticky} from "@nutui/nutui-react-taro";
import {useCallback, useEffect, useState} from "react";
import Taro, {getCurrentInstance} from "@tarojs/taro";
import {useModal, useNavigationBar, useToast} from "taro-hooks";
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';
import {fetcher, sendRequest} from "../../fetcher";
import {getStatus, getTag} from "../lib";
import {Text} from "@tarojs/components";

export default function TaskComplete(){
  let params = getCurrentInstance().router.params;
  const { data, error } = useSWR(`https://localhost:7199/task/${params.id}`, fetcher)

  const { trigger, isMutating} = useSWRMutation('https://localhost:7199/updateTaskTime', sendRequest, /* options */)


  const [_, { setTitle }] = useNavigationBar();

  useEffect(() => {
    if (data == null) {
      return
    }
    setTitle(data.name)
  }, [data]);

  const [canEdit, setCanEdit] = useState(false)

  const [showActStartTime, setShowActStartTime] = useState(false)
  const [actStartTime, setActStartTime] = useState(data?.actStartTime)

  const [showActEndTime, setShowActEndTime] = useState(false)
  const [actEndTime, setActEndTime] = useState(data?.actEndTime)

  useEffect(() => { setActStartTime(data?.actStartTime); }, [data])
  useEffect(() => { setActEndTime(data?.actEndTime); }, [data])

  const confirmActStartTime = (values)=>{
    const date = values.slice(0, 3).join('-');
    const time = values.slice(3).join(':');
    setActStartTime(`${date  } ${  time}`)
  }

  const confirmActEndTime = (values)=>{
    const date = values.slice(0, 3).join('-');
    const time = values.slice(3).join(':');
    setActEndTime(`${date  } ${  time}`)
  }

  async function handleClick(){
    console.log("click...", data);

    try {
      const res = await trigger({...data, actStartTime: actStartTime, actEndTime: actEndTime})
      console.log("resutt", res)
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
      <CellGroup title="开始">
        <Cell title='最早' desc={data?.earlyStartTime} />
        <Cell title='最晚' desc={data?.lateStartTime} />
        <Cell title='实际' desc={actStartTime} onClick={() => setShowActStartTime(true)} />
        {/*<Cell title='实际' desc={canEdit ? "请选择" : actStartTime} onClick={canEdit ? () => setShowActStartTime(true) : () => {}} />*/}
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

      <CellGroup title="结束">
        <Cell title='最早' desc={data?.earlyEndTime} />
        <Cell title='最晚' desc={data?.lateEndTime} />
        <Cell title='实际' desc={actEndTime} onClick={() => setShowActEndTime(true)} />
        {/*<Cell title='实际' desc={canEdit ? "请选择" : actEndTime} onClick={canEdit ? () => setShowActEndTime(true) : () => {}} />*/}
        <DatePicker
          title='时间选择'
          type='datetime'
          // modelValue={actEndTime}
          minDate={minDate}
          visible={showActEndTime}
          onCloseDatePicker={() => setShowActEndTime(false)}
          onConfirmDatePicker={(values,options) => confirmActEndTime(values,options)}
        />
      </CellGroup>

      <Row type='flex' justify='end'>
        <div style='padding-right: 10px'>
          {getTag(data?.statusCode, data?.activationCode)}
        </div>
      </Row>

      <CellGroup>
        {/*<Row type='flex' justify='center'>*/}
        {/*  <Button type='info' onClick={() => setCanEdit(true)}>*/}
        {/*    编辑*/}
        {/*  </Button>*/}
        {/*</Row>*/}

        <Row type='flex' justify='center'>
          <Button type='info' onClick={handleClick}>
            更新
          </Button>
        </Row>
      </CellGroup>
    </>
  )
}
