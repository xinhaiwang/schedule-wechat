import {Tag} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

export function getTag(statusCode, activationCode){

  if (statusCode === "TK_Complete") {
    return <Tag type='primary'>已完成</Tag>;
  }

  if (statusCode === "TK_Active"){
    return <Tag type='success'>已开始</Tag>;
  }

  if (statusCode === "TK_NotStart" && (activationCode === "TK_ReadyNotLate" || activationCode === "TK_ReadyLate")) {
    return <Tag plain>未开始</Tag>
  }
  return <Tag color='#E9E9E9' textColor='#999999'>未开始</Tag>;
}

export function getOnTapFunction(id, statusCode, activationCode){
  if (statusCode === "TK_Complete") {
    return ()=> Taro.navigateTo({url: `/pages/history/historyDetail?id=${id}`});
  }

  if (statusCode === "TK_Active"){
    return ()=> Taro.navigateTo({url: `/pages/taskDetail/taskDetail?id=${id}`});
  }

  if (statusCode === "TK_NotStart" && (activationCode === "TK_ReadyNotLate" || activationCode === "TK_ReadyLate")) {
    return ()=> Taro.navigateTo({url: `/pages/taskDetail/taskDetail?id=${id}`});
  }
  return () => {};

}

export function getStatus(statusCode){

  if (statusCode === "TK_Complete") {
    return '已完成';
  }

  if (statusCode === "TK_Active"){
    return '已开始';
  }

  return '未开始';

}
