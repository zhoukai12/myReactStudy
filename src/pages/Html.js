import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import { Collapse ,Icon} from 'antd';
const { Panel } = Collapse;

const List=[
    {title:'asd',text:'',href:'https:001'},
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

class Html extends Component{
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
export default Html;