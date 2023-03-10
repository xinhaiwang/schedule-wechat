import useSWR from "swr";
import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import {fetcher} from "../../fetcher";

export default function Project(){
  const { data: projects, error } = useSWR('https://localhost:7199/projects', fetcher);


  return (
    <>
      <CellGroup>
        {
          projects?.map(({id, name}) => (
            <Cell title={name} onClick={()=> Taro.navigateTo({url: `/pages/wbs/wbs?projectId=${id}`})} />
          ))
        }
      </CellGroup>
    </>
  )
}
