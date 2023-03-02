import { View, Text, Button, Image } from "@tarojs/components";
import Taro, {getCurrentInstance} from "@tarojs/taro";
import {Cell, CellGroup, Icon, Row} from "@nutui/nutui-react-taro";
import { Tag } from '@nutui/nutui-react-taro';

import logoImg from "../imgs/logo.png";
import frontImg from '../imgs/frontImg.jpg';
import dateImg from '../imgs/data.png';
import taskImg from '../imgs/task.png';

import './index.scss'
import useSWR from "swr";
import {fetcher} from "../../fetcher";
import {getOnTapFunction, getTag} from "../lib";

const Index = () => {

  const { data: tasks, error } = useSWR('https://localhost:7199/tasks', fetcher);

  // console.log(tasks)

  return (
    <>
      <CellGroup>
        {
          tasks?.map(function({id, name, actEndTime, statusCode, activationCode}){
            return (<Cell iconSlot={getTag(statusCode, activationCode)} title={name} desc={actEndTime} onClick={getOnTapFunction(id, statusCode, activationCode)} />);
        })
        }
      </CellGroup>
    </>
  )
};

export default Index;
