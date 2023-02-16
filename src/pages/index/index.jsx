import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import {Cell, CellGroup, Icon, Row} from "@nutui/nutui-react-taro";
import logoImg from "../imgs/logo.png";
import frontImg from '../imgs/frontImg.jpg';
import dateImg from '../imgs/data.png';
import taskImg from '../imgs/task.png';

import './index.scss'

const Index = () => {

  function handleClick() {

  }

  return (
    <>
      <Image
        src={logoImg}
        mode='heightFix'
        style='position: absolute; height: 70px'
      />
      <Image
        mode='heightFix'
        src={frontImg}
      />

      <CellGroup class='content'>
        <Row type='flex' onClick={() => {Taro.navigateTo({url: "/pages/tasks/tasksUpdate"})}} >
          <div style='padding-left: 10px'>
            <Image
              src={dateImg}
              style='width: 60px;height: 60px'
            />
          </div>
          <Row type='flex' justify='space-between'>
            <div style='padding-top: 20px '>
              <Text>数据申报</Text>
            </div>
            <div style='padding-right: 20px; padding-top: 15px'>
              <Icon name='right' size='20' color='#D3D3D3' />
            </div>
          </Row>
        </Row>

        <Row type='flex' onClick={() => {Taro.navigateTo({url: "/pages/tasks/tasksPending"})}} >
          <div style='padding-left: 10px'>
            <Image
              src={taskImg}
              style='width: 60px;height: 60px'
            />
          </div>
          <Row type='flex' justify='space-between'>
            <div style='padding-top: 20px '>
              <Text>任务查看</Text>
            </div>
            <div style='padding-right: 20px;padding-top: 15px'>
              <Icon name='right' size='20' color='#D3D3D3' />
            </div>
          </Row>
        </Row>
      </CellGroup>
    </>
  );
};

export default Index;
