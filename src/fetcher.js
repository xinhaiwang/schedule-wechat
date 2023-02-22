import Taro from "@tarojs/taro";

export const fetcher = url => Taro.request({url}).then(res => res.data)
// export const fetcher = (...args) => Taro.request({...args}).then(res => res.data)

// export async function fetcher({url, data}){
//   return  Taro.request({url,data}).then(res => res.data);
// }
export async function sendRequest(url, {arg}) {
  return Taro.request({url, method: "POST", data: arg}).then(res => res.data)
}
