import useSWR from "swr";
import Taro from "@tarojs/taro";
import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import {fetcher} from "../../fetcher";

export default function WBS(){

  const { data, error } = useSWR(`https://localhost:7199/wbstab`, fetcher);
  return (
    <>
      <CellGroup>
        {
          data?.wbss?.map(({id, name}) => (
            <Cell title={name} onClick={()=> Taro.navigateTo({url: `/pages/wbs/sub?parentId=${id}`})} isLink />
          ))
        }
        {
          data?.tasks?.map(({id, name}) => (
            <Cell title={name} onClick={()=> Taro.navigateTo({url: `/pages/history/historyDetail?id=${id}`})} />
          ))
        }
      </CellGroup>
    </>
  );
}
