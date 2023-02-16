import {Cell, CellGroup, Collapse, CollapseItem} from "@nutui/nutui-react-taro";

export default function TaskDetail(){
  return (
   <>
     <CellGroup>
       <Cell title='最早开始时间' desc='2023-01-01 08:30' />
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
             <Cell title='计划开始使用时间' desc='资源一' />
             <Cell title='计划结束使用时间' desc='资源一' />
             <Cell title='实际开始使用时间' desc='资源一' />
             <Cell title='>实际结束使用时间' desc='资源一' />
           </CellGroup>
         </CollapseItem>
         <CollapseItem title="资源二" name="2">
           <CellGroup>
             <Cell title='资源名称' desc='资源一' />
             <Cell title='目标用量' desc='10' />
             <Cell title='实际用量' desc='10' />
             <Cell title='计划开始使用时间' desc='资源一' />
             <Cell title='计划结束使用时间' desc='资源一' />
             <Cell title='实际开始使用时间' desc='资源一' />
             <Cell title='>实际结束使用时间' desc='资源一' />
           </CellGroup>
         </CollapseItem>
       </Collapse>
     </CellGroup>




   </>
  )
}
