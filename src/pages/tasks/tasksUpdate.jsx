import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

export default function TasksUpdate(){
  return (
    <>
      <CellGroup>
        <Cell title='钢筋一' onClick={()=> Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})} />
        <Cell title='钢筋二' onClick={()=> Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})} />
        <Cell title='钢筋三' onClick={()=> Taro.navigateTo({url: '/pages/taskDetail/taskDetail'})} />
      </CellGroup>
    </>
  )
}
