import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import Taro, {getCurrentInstance} from "@tarojs/taro";
import useSWR from "swr";
import {fetcher} from "../../fetcher";

export default function HistoryList(){

  let params = getCurrentInstance().router.params;

  const { data: tasks, error } = useSWR(`https://localhost:7199/tasks?start=${params.start}&end=${params.end}`, fetcher);

  // Taro.showToast({
  //   title: '成功',
  //   icon: 'success',
  //   duration: 2000
  // })

  return (
    <>
      <CellGroup>
        {
          tasks?.map(({id, name, actEndTime}) => (
            <Cell title={name} desc={actEndTime} onClick={()=> Taro.navigateTo({url: `/pages/history/historyDetail?id=${id}`})} />
          ))
        }
      </CellGroup>
    </>
  )
}
