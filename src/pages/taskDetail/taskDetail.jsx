import {Button, Cell, CellGroup, Collapse, CollapseItem, DatePicker, Row} from "@nutui/nutui-react-taro";
import {useCallback, useEffect, useState} from "react";
import {useModal, useToast} from "taro-hooks";
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';
import {fetcher, sendRequest} from "../../fetcher";

export default function TaskDetail(){

  const { data, error } = useSWR('https://localhost:7199/test', fetcher)
  const { trigger, isMutating } = useSWRMutation('https://localhost:7199/tasks', sendRequest, /* options */)


  console.log(data);



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

  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true,
  });
  const [showToast] = useToast({ mask: true });

  const handleModal = useCallback(async () => {
    try {
      console.log("mutate....", data)
      await trigger({...data, actStartTime: actStartTime, actEndTime: actEndTime})
      showToast({ title: "更新成功" });
    } catch (e) {
      console.log(e)
    }
  }, [show, showToast]);

  async function handleClick(){
    console.log("click...", data);

    try {
      await trigger({...data, actStartTime: actStartTime, actEndTime: actEndTime})
      await showToast({ title: "更新成功" });
    } catch (e) {
      console.log(e)
    }
  }



  return (
   <>
     <CellGroup>
       <Cell title='最早开始时间' desc={data?.earlyStartTime} />
       <Cell title='最早结束时间' desc={data?.earlyEndTime} />
       <Cell title='最晚开始时间' desc={data?.lateStartTime} />
       <Cell title='最晚结束时间' desc={data?.lateEndTime} />
       <Cell title='实际开始时间' desc={actStartTime} onClick={() => setShowActStartTime(true)} />
       <DatePicker
         title='时间选择'
         type='datetime'
         visible={showActStartTime}
         onCloseDatePicker={() => setShowActStartTime(false)}
         onConfirmDatePicker={(values,options) => confirmActStartTime(values,options)}
       />
       <Cell title='实际结束时间' desc={actEndTime} onClick={() => setShowActEndTime(true)} />
       <DatePicker
         title='时间选择'
         type='datetime'
         visible={showActEndTime}
         onCloseDatePicker={() => setShowActEndTime(false)}
         onConfirmDatePicker={(values,options) => confirmActEndTime(values,options)}
       />
       <Cell title='任务当前状态' desc='进行' />
     </CellGroup>

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
             <Cell title='>实际结束使用时间' desc='2023-01-01 08:30' />
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
             <Cell title='>实际结束使用时间' desc='2023-01-01 08:30' />
           </CellGroup>
         </CollapseItem>
       </Collapse>

       <Row type='flex' justify='center'>
         <Button type='info' onClick={handleClick}>
           更新
         </Button>
       </Row>
     </CellGroup>
   </>
  )
}
