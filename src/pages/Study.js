import React, { Component } from 'react';
import { Timeline } from 'antd';

const List=[
    {time:'2019-10-22',main:'  搭建简单的react+路由结构，搭建好了资料以及准备的工作',},
    {time:'2019-10-23',main:'  react属性校验以及生命周期函数、性能优化',},
    {time:'2019-10-24',main:'  react请求远程数据接口',},
]

class Study extends Component{
    render(){
        return(
            <Timeline>
                {
                    List.map((item,index)=>{
                        return(
                            <Timeline.Item key={index}>{item.time+item.main}</Timeline.Item>
                        )
                    })
                }
            </Timeline>
        )
    }
}
export default Study;