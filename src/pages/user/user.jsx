import {Cell, CellGroup} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import {useEffect, useState} from "react";

export default function User(){

  // const [avatarUrl, SetAvatarUrl] = useState(null);

  useEffect(() => {
      Taro.getUserProfile({
        desc: '用于完善个人资料',
        success: (res) => {
          console.log(res);
          // SetAvatarUrl(res.userInfo.avatarUrl);
        }
      });
  }
  // const accountInfo = Taro.getAccountInfoSync()

  // Taro.request({url: 'https://localhost:44360/WeatherForecast'}).then(function (res) {
  //   console.log(res)
  // }
    ,[])


  return (
    <>
      {/*{avatarUrl &&  <Image src={avatarUrl} style='width: 60px;height: 60px' />}*/}

      <CellGroup
        title='个人信息'
      >
        <Cell title='所属公司' isLink onClick={() => {Taro.navigateTo({url: `/pages/taskDetail/taskDetail`})}} />
        <Cell title='所在项目' isLink />
        <Cell title='OBS角色' isLink />
        <Cell title='手机号' isLink />
        <Cell title='电子邮件' isLink />
      </CellGroup>
    </>
  )
}
