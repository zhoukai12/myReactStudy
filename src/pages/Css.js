import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import { Collapse ,Icon} from 'antd';
const { Panel } = Collapse;

const List=[
    {title:'移动端适配rem',text:`<script>
    //屏幕适应
    (function (win, doc) {
        if (!win.addEventListener) return;
        var html = document.documentElement;
        function setFont() {
            var html = document.documentElement;
            var k = 640;
            html.style.fontSize = html.clientWidth / k * 100 + "px";
        }
        setFont();
        setTimeout(function () {
            setFont();
        }, 300);
        doc.addEventListener('DOMContentLoaded', setFont, false);
        win.addEventListener('resize', setFont, false);
        win.addEventListener('load', setFont, false);
    })(window, document);
</script>`,href:'https://tgideas.qq.com/doc/frontend/spec/m/layout.html'},
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

class Css extends Component{
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
export default Css;