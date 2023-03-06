import useSWR from "swr";
import Taro, {getCurrentInstance} from "@tarojs/taro";
import {Cell, CellGroup, Tag} from "@nutui/nutui-react-taro";
import {fetcher} from "../../fetcher";
import {getOnTapFunction, getTag} from "../lib";

export default function Sub(){
  const params = getCurrentInstance().router.params;

  const { data, error } = useSWR(`https://localhost:7199/wbsview?parentId=${params.parentId}`, fetcher);

  // console.log(data);

  return (
    <>
      <>
        {
          data?.pages?.map(function({id, name}, index) {
            const onClick = index === data?.pages?.length - 1 ? () => {} : () => Taro.redirectTo({url: `/pages/wbs/sub?parentId=${id}`})
            return (
             <Tag type='primary' mark onClick={onClick}>
               {name}
             </Tag>
            )
          })
        }
      </>
      <CellGroup>
        {
          data?.wbss?.map(({id, name}) => (
            <Cell title={name} onClick={()=> Taro.redirectTo({url: `/pages/wbs/sub?parentId=${id}`})} isLink />
          ))
        }
        {
          data?.tasks?.map(({id, name, actEndTime, statusCode, activationCode}) => (
            <Cell iconSlot={getTag(statusCode, activationCode)} title={name} desc={actEndTime} onClick={getOnTapFunction(id, statusCode, activationCode)} />
          ))
        }
      </CellGroup>
    </>
  );
}
