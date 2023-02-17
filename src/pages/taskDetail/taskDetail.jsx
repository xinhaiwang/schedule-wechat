import {Button, Cell, CellGroup, Collapse, CollapseItem, DatePicker, Row} from "@nutui/nutui-react-taro";
import {useCallback, useState} from "react";
import {useModal, useToast} from "taro-hooks";

export default function TaskDetail(){

  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState('2012年 01月 01日')
  const confirm1 = (values, options)=>{
    setDesc1(options.map((option) => option.text).join(' '))
  }

  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true,
  });
  const [showToast] = useToast({ mask: true });

  const handleModal = useCallback(() => {
      showToast({ title: "更新成功" });
  }, [show, showToast]);

  return (
   <>
     <CellGroup>
       <Cell title='最早开始时间' desc={desc1} onClick={() => setShow1(true)} />
       <DatePicker
         title="日期选择"
         visible={show1}
         isShowChinese
         onCloseDatePicker={() => setShow1(false)}
         onConfirmDatePicker={(values,options) => confirm1(values,options)}
       />
       <Cell title='最早结束时间' desc='2023-02-01 08:30' />
       <Cell title='最晚开始时间' desc='2023-01-15 08:30' />
       <Cell title='最晚结束时间' desc='2023-02-15 08:30' />
       <Cell title='实际开始时间' desc='2023-01-10 08:30' />
       <Cell title='实际结束时间' desc='' />
       <Cell title='任务当前状态' desc='进行' />
     </CellGroup>

     <CellGroup title='资源'>
       <Collapse activeName={[]} icon="arrow-down" iconSize="16" iconColor="#999">
         <CollapseItem title="资源一" name="1">
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
         <CollapseItem title="资源二" name="2">
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
         <Button type='info' onClick={handleModal}>
           更新
         </Button>
       </Row>
     </CellGroup>




   </>
  )
}
