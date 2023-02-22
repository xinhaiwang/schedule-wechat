import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import useSWR from "swr";
import {getCurrentInstance} from "@tarojs/taro";
import {fetcher} from "../../fetcher";

export default function HistoryDetail(){
  let params = getCurrentInstance().router.params;
  const { data, error } = useSWR(`https://localhost:7199/task/${params.id}`, fetcher)

  return(
    <>
      <CellGroup>
        <Cell title='最早开始时间' desc={data?.earlyStartTime} />
        <Cell title='最早结束时间' desc={data?.earlyEndTime} />
        <Cell title='最晚开始时间' desc={data?.lateStartTime} />
        <Cell title='最晚结束时间' desc={data?.lateEndTime} />
        <Cell title='实际开始时间' desc={data?.actStartTime} />
        <Cell title='实际结束时间' desc={data?.actEndTime} />
      </CellGroup>
    </>
  );
}
