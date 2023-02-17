import Taro, {useLaunch} from "@tarojs/taro";
import "./app.scss";
function App(props) {


  useLaunch(() => {
    Taro.login({
      success: function (res) {
        console.log(res);
        if (res.code) {
          //发起网络请求
          Taro.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

    // const accountInfo = Taro.getAccountInfoSync();

    // console.log(accountInfo)


  })

  return (
    <>
      {props.children}
    </>
  )
}

export default App;
