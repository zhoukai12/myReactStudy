import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import {Collapse, Icon} from 'antd';

const {Panel} = Collapse;

const List = [
    {title: '解析html代码', text: `dangerouslySetInnerHTML={{__html:item}}`, href: ''},
    {title: 'react调试工具', text: `React Developer Tools`, href: 'https://www.bilibili.com/video/av51455080/?p=16'},
    {
        title: '_PropTypes校验传递的值',
        text: `import PropTypes from 'prop-types'
XXX.propTypes={
    string: PropTypes.string,
    func:PropTypes.func
} 
XXX.defaultProps={
    xxx:xxx
}
PropTypes.string 可传可不传
PropTypes.string.isRequired 必须传值
        
        `,
        href: 'https://www.bilibili.com/video/av51455080/?p=17'
    },
    {
        title: '生命周期函数',
        text:
`//在某一时刻可以自动执行的函数是生命周期函数
componentWillMount
    在dom挂在到页面之前执行
render
    状态或属性改变都会执行
componentDidMount
    组建挂载完成之后执行
shouldComponentUpdate
    在组建更新之前执行  必须返回一个bool值  返回false的话就不会执行后续了
    有优化性能的功能
    两个参数 nextProps nextState
    if(nextProps.xxx!==this.props.xxx)
    {
        return true
    }else{
        return false
    }
componentWillUpdate
    在shouldComponentUpdate之后执行
componentDidUpdate
    在组件更新完毕之后执行
componentWillReceiveProps
    在子组件中使用 
    组件第一次存在于dom中，函数不会去执行
    如果已经存在于dom中，函数才会被执行
componentWillUnMount
    在组件被删除之前执行
`,
        href: 'https://www.bilibili.com/video/av51455080/?p=20'
    },
    {
        title: 'react请求接口数据',
        text: `
在componentDidMount中使用
        `,
        href: 'https://www.bilibili.com/video/av51455080/?p=23'
    },
    {
        title: 'react坑',
        text: `
代码注释 ： {/* 我是react注释 */}
单行注释需要换行： {
                  // 我是单行注释 
                  }
this.setState是一个异步方法
this.setState({
    },()=>{
        在回调中使用
})
        `,
        href: ''
    },
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

class ReactStudy extends Component {
    render() {
        return (
            <div>
                <Collapse accordion>
                    {
                        List.map((item, index) => {
                            return (
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

export default ReactStudy;