import React, { Component } from 'react'
import { Select, Drawer, Collapse, Tabs } from 'antd';
import { connect } from 'react-redux'
import { doLogin } from 'store/user/actionCreators'
import Header from "@/components/header/index"
import Footer from "@/components/footer/index"
import {withRouter} from "react-router-dom";
import './index.scss';
import Right from "../../image/right.png"
import person_1 from "../../image/person_1.png"
import MenuAdd from "../../image/menu_add.png"
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import Diamond1 from "../../image/diamond_1.png"
import Diamond2 from "../../image/diamond_2.png"
import Diamond3 from "../../image/diamond_3.png"
import Diamond4 from "../../image/diamond_4.png"
import Diamond5 from "../../image/diamond_5.png"
import Diamond6 from "../../image/diamond_6.png"
import 'swiper/components/pagination/pagination.scss';
const { Panel } = Collapse;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
const { Option } = Select;
const { TabPane } = Tabs;
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (params) => {
      dispatch(doLogin(params))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      gemBox: false,
      someProduce: [
        { pic: Diamond1, level: "Level1" },
        { pic: Diamond2, level: "Level2" },
        { pic: Diamond3, level: "Level3" },
        { pic: Diamond4, level: "Level4" },
        { pic: Diamond5, level: "Level5" },
        { pic: Diamond6, level: "Level6" },
      ],
    }
  }
  render() {
    let { someProduce, menuList, activeMenuIndex, activeMenuItem,
      goodsList, scrollTop, offTop, pageNum, gemBox,
      day, hours, minutes, seconds, } = this.state
    return (
      <>
        <div className="pledge">
          <Header></Header>
          <div className="top_banner">
            <img src={person_1} alt="" />
          </div>
          <div className="mid_box">
            <div className="add_box">
              <div className="add_gem">
                <div className="add_img">
                  <div onClick={() => { this.setState({ gemBox: true }) }}>
                    <img src={MenuAdd} alt="" />
                  </div>
                </div>
                <div className="action">Add gem</div>
                {/* <div className="box_back"></div> */}
                {/* <div className="back_img"></div> */}
              </div>
              <div className="mid_pro">
                <div><img src={Right} alt="" />User</div>
                <div>Grade: <span>0</span></div>
                <div>Level privilege introduction information display level privilege introduction information display</div>
                <div>count down</div>
                <div>
                  <div>15 <span>Day</span></div>
                  <div>00:00:00</div>
                </div>
              </div>
            </div>
            <div className="progress_box">
              <div className="pic_box"><img src={Diamond1} alt="" /></div>
              <div className="line"></div>
              <div className="pic_box"><img src={Diamond2} alt="" /></div>
              <div className="line"></div>
              <div className="pic_box"><img src={Diamond3} alt="" /></div>
              <div className="line"></div>
              <div className="pic_box"><img src={Diamond4} alt="" /></div>
              <div className="line"></div>
              <div className="pic_box"><img src={Diamond5} alt="" /></div>
            </div>
          </div>
          <div className="all_width">Gem fusion rules</div>
          <div className="rules">
            <div className="every_rule">
              <div className="left">
                <div>1</div>
              </div>
              <div className="right">
                Two identical gemstones can be upgraded, and gemstones of higher level
                can be fused. For example, gemstone 1 + gemstone 1 can be upgraded to
                gemstone 2. Using this rule, gemstones can be upgraded to level 5 at most.
                When gemstones are upgraded to level 5, coins are required for upgrading
                again. After successfully upgrading with coins, gemstone inlaying equipment
                can be obtained. Upgrading again requires one coin each time, for example,
                You have obtained a level 6 device. You need to upgrade to a level 7 device
                A level 6 NFT + a coin NFT for fusion upgrade.
              </div>
            </div>
            <div className="every_rule">
              <div className="left">
                <div>2</div>
              </div>
              <div className="right">
                Each gem upgrade and fusion will consume 0.1sol. Gem synthesis has a success probability. The probability of upgrading from level 1 to level 2 is 90%, the probability of upgrading from level 2 to level 3 is 70%, the probability of upgrading from level 3 to level 4 is 60%, and the probability of upgrading from level 4 to level 5 is 50%. After reaching level 5, subsequent upgrades need to use coin NFT for upgrading. The success probability is 100%, and each upgrade consumes 0.1sol
              </div>
            </div>
            <div className="every_rule">
              <div className="left">
                <div>3</div>
              </div>
              <div className="right">
                If the fusion fails, the two NFTs submitted by the user will be returned, and the handling fee will not be returned. If the fusion succeeds, the user can extract an advanced NFT
              </div>
            </div>
          </div>
          <div className="all_width">Privilege introduction</div>
          <div className="mid_swiper">
            <Swiper
              slidesPerView={2.8} //同屏显示多少个swiper滑块
              spaceBetween={0}
              // centeredSlides
              initialSlide={1} //默认展示第几个滑块
              loop={false} //是否开启无限轮播
              pagination={{ clickable: true }} //开启分页器操作
              observer={true} //修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
              observeParents={true} //修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
              autoplay={false} //自动轮播开启
              onSwiper={(e) => {
                console.log(e, "e")
                this.setState({
                  swiperInfo: e
                })
              }}
            >
              {someProduce.map((item, index) =>
                <SwiperSlide key={index}>
                  <div className="intro">
                    <div className="swiper_img"><img alt="1" src={item.pic} /></div>
                    <div className="swiper_banner">
                      <div className="title">Grade I</div>
                      <div className="content">Mint is 20% off.</div>
                      <div className="content">Mint is 20% off.</div>
                      <div className="content">Mint is 20% off.</div>
                    </div>
                    <div className="swiper_bottom"></div>
                  </div>
                  {/* <img alt="1" src={item.pic} className="swiper_img"></img>
                  <div className="swiper_level">{item.level}</div> */}
                </SwiperSlide>)}
            </Swiper>
            <div className="navigation_box">
              <div onClick={(e) => {
                let num = 0
                if (this.state.swiperInfo.activeIndex - 1 >= 0) {
                  num = this.state.swiperInfo.activeIndex - 1
                } else {
                  num = this.state.swiperInfo.activeIndex
                }
                this.state.swiperInfo.slideTo(num)
              }}><img src={Right} alt="" /></div>
              <div onClick={(e) => {
                let num = 0
                if (this.state.someProduce.length > this.state.swiperInfo.activeIndex + 1) {
                  num = this.state.swiperInfo.activeIndex + 1
                } else {
                  num = this.state.swiperInfo.activeIndex
                }
                this.state.swiperInfo.slideTo(num)
              }}><img src={Right} alt="" /></div>

            </div>
          </div>
          <div className="all_width width_title" style={{ marginBottom: "0.28rem !important;" }}>FAQ</div>
          <div className="faq_box">
            <Collapse defaultActiveKey={['1']} ghost accordion expandIconPosition={"right"} expandIcon={() => { return <img src={MenuAdd}></img> }}>
              <Panel header="This is panel header 1" key="1">
                <p>111</p>
              </Panel>
              <Panel header="This is panel header 1" key="2">
                <p>111</p>
              </Panel>
              <Panel header="This is panel header 1" key="3">
                <p>111</p>
              </Panel>
              <Panel header="This is panel header 1" key="4">
                <p>111</p>
              </Panel>
              <Panel header="This is panel header 1" key="5">
                <p>111</p>
              </Panel>
            </Collapse>,
          </div>
          <Footer></Footer>
          <Drawer
            placement={"right"}
            closable={false}
            onClose={() => { this.setState({ gemBox: false }) }}
            visible={gemBox}
            // key={"bottom"}
            width={"4.97rem"}
            className="goods_drawer"
          >
            <div className="choose_gem">
              <div className="box">
                <div className="top_nav">
                  <div onClick={() => { this.setState({ gemBox: false }) }}><img src={Right} alt="" /> My gem</div>
                  <Select
                    placeholder="User address name"
                    allowClear
                    className="select_options"
                    onChange={(e) => {
                    }}

                  >
                    <Option value={1} key={1} className="myOptions">1</Option>
                    <Option value={2} key={2} className="myOptions">2</Option>
                    {/*  <Option value={r.id} key={r.id}>{r.name}</Option> */}
                  </Select>
                </div>
                <div>
                  <Tabs defaultActiveKey="1" onChange={(e) => { console.log(e) }} className="fusion_tabs">
                    <TabPane tab="Level 1" key="1">
                      {
                        someProduce.map((r, i) => {
                          return (
                            <div className="every_gem">
                              <div><img src={r.pic} alt="" /></div>
                              <div>{r.level}</div>
                            </div>
                          )
                        })
                      }

                    </TabPane>
                    <TabPane tab="Level 2" key="2">
                      Content of Tab Pane 3
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </Drawer>
        </div>


      </>

    )
  }
  //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
  componentDidMount() {

    // this.countDown();
  }
  //在componentWillUnmount，进行scroll事件的注销
  componentWillUnmount() {
    clearTimeout(this.time);
  }
  countDown() {
    const currTime = new Date().getTime();
    const dTime = deadline - currTime;
    if (dTime <= 0) {
      // 这样做更精确
      clearTimeout(this.time);
      this.setState({
        day: "00", seconds: "00"
      });
      return;
    }
    this.time = setTimeout(() => {
      this.setState(this.formatTime(dTime));
      this.countDown();
    }, 1000);
  }
  formatTime(time) {
    const day = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24).toString().padStart(2, "0");
    const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
    // const milliseconds = Math.floor(time % 1000);
    return ({ day, hours, minutes, seconds });
  }
  getIcon() {

  }
}


export default Login