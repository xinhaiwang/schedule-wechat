import {Cell, CellGroup} from "@nutui/nutui-react-taro";

export default function User(){

  return (
    <>
      user
      <CellGroup
        title='个人信息'
      >
        <Cell title='所属公司' isLink />
        <Cell title='所在项目' isLink />
        <Cell title='OBS角色' isLink />
        <Cell title='手机号' isLink />
        <Cell title='电子邮件' isLink />
      </CellGroup>
    </>
  )
}
