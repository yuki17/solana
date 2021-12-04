import React, { Component } from 'react'
import { HashRouter as Router,Route, Switch, Redirect } from 'react-router-dom'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Index from 'pages/index'
import GoodsList from 'pages/goodsList'
import Mint from 'pages/mint'
import Pledge from 'pages/pledge'
import Fusion from 'pages/fusion'
import { createHashHistory } from "history";
// const browserHistory = createBrowserHistory();
export default class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          {/* <Route  path="/mms" render={(routeProps)=>{
            // 判断是否登录，登录了可以访问，否则补鞥呢访问
            return <Admin {...routeProps}/>
          }} /> */}
          <Route path="/index" exact  component={Index} />
          <Route path="/goodsList"  exact component={GoodsList} />
          <Route path="/mint" exact component={Mint} />
          <Route path="/fusion" exact  component={Fusion} />
          <Route path="/pledge" exact component={Pledge} />
          <Route path="/login" exact  component={Login} />
          <Route path="/404"  component={NotFound} />
          <Redirect to="/index"  from="/" exact />
        </Switch>
       </Router>

    )
  }
  resizeListener() {
    // 定义设计图的尺寸 1920
    let designSize = 1440;
    // 获取 html 元素
    let html = document.documentElement;
    // 定义窗口的宽度
    let clientW = html.clientWidth;
    // html 的fontsize 大小
    let htmlRem = clientW * 144 / designSize;
    console.log(htmlRem)
    html.style.fontSize = htmlRem + 'px';
  }
  // 在第一次渲染后调用
  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
    this.resizeListener();
  }
  // 在组件从 DOM 中移除之前立刻被调用
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }
}
