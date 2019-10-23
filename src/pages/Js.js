import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import { Collapse ,Icon} from 'antd';
const { Panel } = Collapse;

const List=[
    {title:'js获取浏览器参数方法',text:`function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}`,href:'https://blog.csdn.net/zoopzz/article/details/78801821'},
    {title:'js禁止页面滑动和取消滑动限制',text:`var mo=function(e){e.preventDefault();};
    /***禁止滑动***/
    function stop(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
    }
    /***取消滑动限制***/
    function move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
    }`,href:''},
    {title:'asd',text:'trs',href:'https://www.cnblogs.com/zhaoxinmei-123/p/8927259.html'}
];


const genExtra = (href) => (
    <Icon
        type="question-circle"
        onClick={event => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
            window.open(href)
        }}
    />
);
class Js extends Component{
    render(){
        return(
            <div>
                <Collapse accordion >
                    {
                        List.map((item,index)=>{
                            return(
                                <Panel header={item.title} key={index} extra={genExtra(item.href)}>
                                    <pre>{item.text}</pre>
                                </Panel>
                            )
                        })
                    }
                </Collapse>
            </div>
        )
    }
}
export default Js;