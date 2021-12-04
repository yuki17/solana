import React, { Component } from 'react'
import { Select, Drawer, Dropdown, Statistic } from 'antd';
import { connect } from 'react-redux'
import { doLogin } from 'store/user/actionCreators'
import Header from "@/components/header/index"
import Footer from "@/components/footer/index"
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import 'swiper/components/pagination/pagination.scss';
import Right from "../../image/right.png"
import Diamond1 from "../../image/diamond_1.png"
import Diamond2 from "../../image/diamond_2.png"
import Diamond3 from "../../image/diamond_3.png"
import MenuAdd from "../../image/menu_add.png"
import GoodsBanner from "../../image/goods_banner.png"
import ProduceInfo from "../../image/produce_info.png"
SwiperCore.use([Pagination, Autoplay, Navigation]);
const { Countdown } = Statistic;
// const startTime = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
const { Option } = Select;
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
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenuIndex: null,
      activeMenuItem: null,
      offTop: 0, //菜单距离顶部的距离
      scrollTop: 0,
      drawerShow: false,
      day: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      startTime:"",
      someProduce: [
        { pic: Diamond1, name: "Level1", sort: 1 },
        { pic: Diamond2, name: "Level2", sort: 2 },
        { pic: Diamond3, name: "Level3", sort: 3 },
        { pic: Diamond1, name: "Level1", sort: 4 },
        { pic: Diamond2, name: "Level2", sort: 5 },
        { pic: Diamond3, name: "Level3", sort: 6 },
        { pic: Diamond1, name: "Level1", sort: 7 },
        { pic: Diamond2, name: "Level2", sort: 8 },
        { pic: Diamond3, name: "Level3", sort: 9 },
      ],
      menuList: [
        { name: "Filter item 1", menuItem: [{ name: "Human (963)" }, { name: "Solana Blob (203)" }] },
        { name: "Filter item 1", menuItem: [{ name: "Human (963)" }, { name: "Solana Blob (203)" }] },
        { name: "Filter item 2", menuItem: [{ name: "Human (963)" }] },
        { name: "Filter item 2", menuItem: [{ name: "Human (963)" }] },
        { name: "Filter item 2", menuItem: [{ name: "Human (963)" }] },
        { name: "Filter item 6", menuItem: [] },
      ],
      goodsList: [
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
        { name: "Art Name #3650", source: "solana", price: "16.88", recharge: "15.00" },
      ],
      pageNum: [1, 2, 3, 4, 5]
    }
  }
  render() {
    let { someProduce, menuList, activeMenuIndex, activeMenuItem,
      goodsList, scrollTop, offTop, pageNum, drawerShow,
      day, hours, minutes, seconds, } = this.state
    return (
      <>
        <div className="goods">
          <Header onMyStep={this.getMyInfo.bind(this)}></Header>
          <div className="top_banner">
            <div className="words">Repurchase publicity area</div>
            <div className="countTime">
              <div className="every_time">
                <div>{day}</div>
                <div>Days</div>
                <div className="oricl"></div>
              </div>
              <div className="every_time">
                <div>{hours}</div>
                <div>Hours</div>
                <div className="oricl"></div>
              </div>
              <div className="every_time">
                <div>{minutes}</div>
                <div>Mins</div>
                <div className="oricl"></div>
              </div>
              <div className="every_time">
                <div>{seconds}</div>
                <div>Secs</div>
                <div className="oricl"></div>
              </div>
            </div>
          </div>
          <div className="produce">
            <Swiper
              slidesPerView={6.6} //同屏显示多少个swiper滑块
              spaceBetween={15}
              centeredSlides
              initialSlide={4} //默认展示第几个滑块
              loop={false} //是否开启无限轮播
              // pagination={{ clickable: true }} //开启分页器操作
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
                <SwiperSlide key={item.sort} onClick={(e) => {
                  e.stopPropagation()
                  this.state.swiperInfo.slideTo(index)
                }}>
                  <img alt="1" src={item.pic} className="swiper_img"></img>
                  <div className="swiper_name">{item.name}</div>
                </SwiperSlide>)}
            </Swiper>
            <div className="navigation_box">
              <div className="left" onClick={(e) => {
                let num = 0
                if (this.state.swiperInfo.activeIndex - 1 >= 0) {
                  num = this.state.swiperInfo.activeIndex - 1
                } else {
                  num = this.state.swiperInfo.activeIndex
                }
                this.state.swiperInfo.slideTo(num)
              }}><img src={Right} alt="" /></div>
              <div className="mid_span"></div>
              <div className="right">
                <div className="nav_btn" onClick={(e) => {
                  let num = 0
                  if (this.state.someProduce.length > this.state.swiperInfo.activeIndex + 1) {
                    num = this.state.swiperInfo.activeIndex + 1
                  } else {
                    num = this.state.swiperInfo.activeIndex
                  }
                  this.state.swiperInfo.slideTo(num)
                }}>
                  <img src={Right} alt="" />
                </div>
                <div className="more_goods">
                  {/* <img src={Right} alt="" /> */}
                  <Dropdown overlay={
                    <div className="more_banner">
                      <div></div>
                      {/* <div></div>
                      <div></div>
                      <div></div>
                      <div></div> */}
                    </div>
                  } placement="bottomRight" arrow>
                    <div>1111</div>
                  </Dropdown>
                </div>

              </div>

            </div>
          </div>

          {/* 商品展示 */}
          <div className="all_produce">
            <div className="top_box">
              <div className="total">Artworks 108</div>
              <div className="data_select">
                <div>Sort by</div>
                <div>
                  <Select
                    placeholder="Ending:soonest"
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
              </div>
            </div>
            <div className="info_box">
              <div className={`left_box ${scrollTop >= offTop ? "fixedClass" : ""}`} id="left_menu" >
                <div className="left_position">
                  {
                    menuList.map((r, i) => {
                      return (
                        <div className="every_menu" key={i}>
                          <div className="sub_menu" onClick={() => {
                            if (r.menuItem && r.menuItem.length > 0) {
                              if (activeMenuIndex == i) {
                                this.setState({
                                  activeMenuIndex: null
                                })
                              } else {
                                this.setState({
                                  activeMenuIndex: i
                                })
                              }

                            }
                          }}>
                            <div className="name">{r.name}</div>
                            <div className={`action ${activeMenuIndex == i ? "openStatus" : ""}`}><img src={MenuAdd} alt="" /></div>
                          </div>
                          {
                            activeMenuIndex == i && r.menuItem.map((l, index) => {
                              return (
                                <div className="menu_item" key={index} onClick={(e) => {
                                  // window.scrollTo(0,this.state.offTop);
                                  window.scrollTo({
                                    top: this.state.offTop,
                                    behavior: "smooth"
                                  });
                                  this.setState({
                                    activeMenuItem: index
                                  })
                                }}>
                                  <img src={activeMenuItem == index ? Right : MenuAdd} alt="" />
                                  {l.name}
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>


              </div>
              <div className="right_box">
                <div className="gird_top">
                  <div>3</div>
                  <div>4</div>
                </div>
                <div className="produce_list">
                  {
                    goodsList.map((r, i) => {
                      return (
                        <div className="every_info" key={i} onClick={() => {
                          this.setState({ drawerShow: true })
                        }}>
                          <div className="pic"><img src={GoodsBanner} alt="" /></div>
                          <div className="mid_intro">
                            <div>{r.name}</div>
                            <div>{r.source}</div>
                          </div>
                          <div className="recharge">
                            <div><img src={ProduceInfo} alt="" />{r.price}</div>
                            <div>Last {r.recharge}</div>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
                <div className="pagination_box">
                  <div className="page_size">
                    {
                      pageNum.map((r, i) => {
                        return <div key={i} onClick={() => {
                          window.scrollTo({
                            top: offTop,
                            behavior: "smooth"
                          });
                        }}>{r}</div>
                      })
                    }
                  </div>
                  <div className="more">SHOW ME MORE</div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
          <Drawer
            placement={"bottom"}
            closable={false}
            onClose={() => { this.setState({ drawerShow: false }) }}
            visible={drawerShow}
            // key={"bottom"}
            height={"100%"}
            className="goods_drawer"
          >
            <div className="close_drawer" onClick={() => this.setState({ drawerShow: false })}><img src={Right} alt="" /></div>
            <div className="fxxk_box">
              <div className="left"><img src={GoodsBanner} alt="" /></div>
              <div className="right">
                <div className="name">entry name</div>
                <div className="tag">
                  <div><img src={Right} alt="" />User address name</div>
                  <div><img src={Right} alt="" />view token</div>
                </div>
                <div className="intro">The project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed here.</div>
                <div className="attr_num">attributes 6</div>
                <div className="attributes">
                  <div className="every_attr">
                    <div>Faction</div>
                    <div>martu</div>
                  </div>
                  <div className="every_attr">
                    <div>Faction</div>
                    <div>martu</div>
                  </div>
                  <div className="every_attr">
                    <div>Faction</div>
                    <div>martu</div>
                  </div>
                  <div className="every_attr">
                    <div>Faction</div>
                    <div>martu</div>
                  </div>
                  <div className="every_attr">
                    <div>Faction</div>
                    <div>martu</div>
                  </div>
                  <div className="every_attr">
                    <div>Faction</div>
                    <div>martu</div>
                  </div>
                </div>
                <div className="recharge">
                  <div><img src={ProduceInfo} alt="" />16.88</div>
                  <div><img src={Right} alt="" />Last 15.00</div>
                </div>
                <div className="btn">Connect Wallet to but <img src={Right} alt="" /></div>
              </div>
            </div>
          </Drawer>
        </div>


      </>

    )
  }
  //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
  componentDidMount() {
    window.addEventListener('scroll', this.bindHandleScroll)
    this.setState({
      offTop: document.getElementById("left_menu").offsetTop
    })
    
  }
  //在componentWillUnmount，进行scroll事件的注销
  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindHandleScroll);
    clearTimeout(this.time);
  }
  bindHandleScroll = (event) => {
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
      || window.pageYOffset
      || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    this.setState({
      scrollTop: scrollTop,
      offTop: document.getElementById("left_menu").offsetTop
    })
  }
  countDown() {
    const currTime = new Date().getTime();
    const dTime = this.state.startTime * 1000 - currTime;
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
  getMyInfo(info){
    console.log(info,"我是商品页面1")
    this.setState({
      startTime:info.startTime
    },()=>{
      this.countDown();
    })
  }
}


export default Login