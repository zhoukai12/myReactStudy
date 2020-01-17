import React, { Component } from 'react';
import { withRouter,Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Html from './pages/Html'
import Css from './pages/Css'
import Js from './pages/Js'
import Study from './pages/Study'
import ReactStudy from './pages/ReactStudy'

const { Header, Content, Footer, Sider } = Layout;

const List = [
    { path: '/', title: 'Html资料', exact: true, component: Html },
    { path: '/css/', title: 'Css资料', exact: false, component: Css },
    { path: '/js/', title: 'Js资料', exact: false, component: Js },
    { path: '/react/', title: 'React资料', exact: false, component: ReactStudy },
    { path: '/my/', title: 'myDateStudy', exact: false, component: Study },
];
class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // componentDidMount() {
    //     const path=this.props.location.pathname
    // }
    // componentWillReceiveProps(){
    //     const path=this.props.location.pathname
    // }
    render() { 
        const path=this.props.location.pathname
        console.log(path)
        return (
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, }}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[path]} >
                        {List.map((item, index) => {
                            return (
                                <Menu.Item key={item.path}>
                                    <Link to={item.path}>
                                        <Icon type="user" />
                                        <span className="nav-text">{item.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            {List.map((item, index) => {
                                return (
                                    <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                                )
                            })}

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>自学react 2019-10-22</Footer>
                </Layout>
            </Layout>
        );
    }
}
 
export default withRouter(NavLeft);