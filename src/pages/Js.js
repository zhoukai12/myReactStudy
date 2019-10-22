import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import { Collapse ,Icon} from 'antd';
const { Panel } = Collapse;

const List=[
    {title:'asd',text:'trs',href:'https://www.baidu.com/s?wd=es6%E5%88%B6%E8%A1%A8%E7%AC%A6&rsv_spt=1&rsv_iqid=0xf14a7ce90001e7b8&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&oq=%25E4%25BA%258C%25E4%25B8%2589%25E5%2588%25B6%25E8%25A1%25A8%25E7%25AC%25A6&rsv_t=9038GzInaORmMlx44z0wWac7A%2FQ9060Wq0GRcBEhLXJoaIp3gUMHpY42u%2FUeOWltjy%2Bh&inputT=1001&rsv_pq=bc2a304d00029fe6&rsv_sug3=18&rsv_sug2=0&rsv_sug4=1001'},
    {title:'asd',text:'trs',href:'https://www.cnblogs.com/newze/p/7535470.html'},
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
                                    <p>{item.text}</p>
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