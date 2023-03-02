import useSWR from "swr";
import Taro, {getCurrentInstance} from "@tarojs/taro";
import {Cell, CellGroup, Tag} from "@nutui/nutui-react-taro";
import {fetcher} from "../../fetcher";

export default function Sub(){
  const params = getCurrentInstance().router.params;

  const { data, error } = useSWR(`https://localhost:7199/wbsview?parentId=${params.parentId}`, fetcher);

  // console.log(data);

  return (
    <>
      <>
        {
          data?.pages?.map(({id, name}) => (
            <Tag type="primary" mark onClick={()=> Taro.redirectTo({url: `/pages/wbs/sub?parentId=${id}`})}>{name}</Tag>
          ))
        }
      </>
      <CellGroup>
        {
          data?.wbss?.map(({id, name}) => (
            <Cell title={name} onClick={()=> Taro.redirectTo({url: `/pages/wbs/sub?parentId=${id}`})} isLink />
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
