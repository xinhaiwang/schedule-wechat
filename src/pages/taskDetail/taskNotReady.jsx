import {Cell, CellGroup, Row} from "@nutui/nutui-react-taro";
import {useNavigationBar} from "taro-hooks";
import Taro, {getCurrentInstance} from "@tarojs/taro";
import useSWR from 'swr';
import {fetcher} from "../../fetcher";
import {getStatus, getTag} from "../lib";
import {useEffect} from "react";

export default function TaskNotReady(){
  let params = getCurrentInstance().router.params;
  const { data, error } = useSWR(`https://localhost:7199/task/${params.id}`, fetcher)
  const [_, { setTitle }] = useNavigationBar();

  useEffect(() => {
    if (data == null) {
      return
    }
    setTitle(data.name)
  }, [data]);

  return (
    <>

      <CellGroup title='最早'>
        <Cell title='最早' desc={data?.earlyStartTime} />
        <Cell title='最晚' desc={data?.lateStartTime} />
      </CellGroup>

      <CellGroup title='最晚'>
        <Cell title='最早' desc={data?.earlyEndTime} />
        <Cell title='最晚' desc={data?.lateEndTime} />
      </CellGroup>

      <Row type='flex' justify='end'>
        <div style='padding-right: 10px'>
          {getTag(data?.statusCode, data?.activationCode)}
        </div>
      </Row>

    </>
  )
}
