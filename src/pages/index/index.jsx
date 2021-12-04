import React, { Component } from 'react'

import { Carousel } from 'antd';
import { connect } from 'react-redux'
import { doLogin } from 'store/user/actionCreators'
import Header from "@/components/header/index"
import Footer from "@/components/footer/index"
// import Swiper from "swiper"
import './index.scss';
// import "swiper/swiper.scss"
// import "swiper/swiper-bundle.min.css"
// import "swiper/swiper-bundle.css"
// 导入基本swipe组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import 'swiper/components/pagination/pagination.scss';

import BackWords from "../../image/backWords.png"
import Person2 from "../../image/person_2.png"
import Right from "../../image/right.png"
import Diamond1 from "../../image/diamond_1.png"
import Diamond2 from "../../image/diamond_2.png"
import Diamond3 from "../../image/diamond_3.png"
import Diamond4 from "../../image/diamond_4.png"
import Diamond5 from "../../image/diamond_5.png"
import Diamond6 from "../../image/diamond_6.png"
import Line from "../../image/line.png"
import LineHeader from "../../image/lineHeader.png"
import RightIcon from "../../image/right_icon.png"
import ErrorIcon from "../../image/error_icon.png"
SwiperCore.use([Pagination, Autoplay, Navigation]);
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
      someProduce: [
        { pic: Diamond1, level: "Level1" },
        { pic: Diamond2, level: "Level2" },
        { pic: Diamond3, level: "Level3" },
        { pic: Diamond4, level: "Level4" },
        { pic: Diamond5, level: "Level5" },
        { pic: Diamond6, level: "Level6" },
      ],
      solution: [
        { image: RightIcon, word: "Establish a public supervision account and release the mint funds of the project party in batches according to the performance stage of the project party" },
        { image: RightIcon, word: "For platform cooperation projects, the minimum guarantee shall not be less than 20% of the mint amount, and the floor price in the secondary market shall be maintained" },
        { image: RightIcon, word: "Assist the project party to provide continuous function empowerment of NFT, so that NFT has more application scenarios" }
      ],
      marketChaos: [
        { image: ErrorIcon, word: "Establish a public supervision account and release the mint funds of the project party in batches according to the performance stage of the project party" },
        { image: ErrorIcon, word: "For platform cooperation projects, the minimum guarantee shall not be less than 20% of the mint amount, and the floor price in the secondary market shall be maintained" },
        { image: ErrorIcon, word: "Assist the project party to provide continuous function empowerment of NFT, so that NFT has more application scenarios" }
      ],
      // swiperBanner: [
      //   { image: ErrorIcon,},
      //   { image: ErrorIcon,},
      //   { image: ErrorIcon,},
      //   { image: ErrorIcon,},
      //   { image: ErrorIcon,},
      //   { image: ErrorIcon,},
      // ],
      roadMap: [
        { icon: "", title: "title", dec: "Countdown and publicity of market NFT repurchase" },
        { icon: "", title: "title", dec: "Announce high-quality partners" },
        { icon: "", title: "title", dec: "The number of winners in the white list is open" },
        { icon: "", title: "title", dec: "Officially open MINT" },
        { icon: "", title: "title", dec: "Announce NFT integration mechanism and hierarchical privilege introduction" },
        { icon: "", title: "title", dec: "Enable NFT fusion function" },
        { icon: "", title: "title", dec: "Countdown and publicity of market NFT repurchase" },
        { icon: "", title: "title", dec: "Enable NFT pledge function" },
        { icon: "", title: "title", dec: "Initial incubation project" },
      ]
    }
  }
  render() {
    let { someProduce, marketChaos, roadMap } = this.state
    return (
      <>
        <div className="index">
        <Header onMyStep={this.getMyInfo.bind(this)}></Header>
          <div className="index_banner">
            <div>Solana NFT Pad</div>
            <div>The high-quality NFT project launch board on sloana is the first to launch a hierarchical mechanism using NFT as the platform privilege certificate.</div>
            <div>Application white list <img src={Right} alt="" /></div>
            <img className="person_2" src={Person2} alt="" />
            <img className="back_words" src={BackWords} alt="" />
          </div>
          <div className="excessive">
            <div>Quality partner</div>
            <div>50% of the platform NFT GEM MINT amount will buy back the high-quality NFT floor price in the current market, The repurchased NFT will be airdropped to the qualified platform NFT holders of Solana NFT pad.</div>
          </div>
          <div className="swiper_1">
            <div className="left">
              <div className="swiper_box">
                <Carousel afterChange={(e) => { console.log(e) }} dots={false}>
                  <div>1</div>
                  <div>2</div>
                </Carousel>
                <div className="dots">
                  <div><img src={Right} alt="" /></div>
                  <div><img src={Right} alt="" /></div>
                </div>
              </div>
            </div>
            <div className="right">
              <div>entry name</div>
              <div>The project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed hereThe project introduction is displayed here.</div>
              <div>View items <img src={Right} alt="" /></div>
            </div>
          </div>
          <div className="some_produce">
            <div className="left_introduce">
              <div>We customized the exclusive coin NFT for the first batch of high-quality cooperative projects, Coin NFT plays an extremely important role in the process of fusing gemstones</div>
              <div>
                <img src={Line} alt="" />
                <img src={LineHeader} alt="" />
              </div>
            </div>
            <div className="right_image">
              {
                someProduce.map((r, i) => {
                  return <div key={i}><img src={r.pic} alt="" /></div>
                })
              }
            </div>
          </div>
          <div className="mid_title">Market solutions</div>
          <div className="market_box">
            <div className="left common">
              <div className="title">Solution</div>
              {
                this.state.solution.map(r => {
                  return <div><img src={r.image} alt="" /><div>{r.word}</div></div>
                })
              }
            </div>
            <div className="right common">
              <div className="title">Market chaos</div>
              {
                marketChaos.map(r => {
                  return <div><img src={r.image} alt="" /><div>{r.word}</div></div>
                })
              }
            </div>
          </div>
          <div className="all_width">Solana NFT Pad</div>
          <div className="high_quality">
            <div>The high-quality NFT project launch board on sloana is the first to launch a hierarchical mechanism using NFT as the platform privilege certificate.</div>
            <div>View details <img src={Right} alt="" /></div>
          </div>
          <div className="mid_swiper">
            <Swiper
              slidesPerView={3.2} //同屏显示多少个swiper滑块
              spaceBetween={20}
              centeredSlides
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
                  <img alt="1" src={item.pic} className="swiper_img"></img>
                  <div className="swiper_level">{item.level}</div>
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
          <div className="all_width" style={{ marginTop: "1.11rem", marginBottom: "0.4rem" }}>road map</div>
          <div className="road_map">
            {
              roadMap.map((r, i) => {
                return (
                  <div className={`every_map ${i == 0 ? "activityMap" : ""} ${i == 1 ? "activitying" : ""}`}>
                    <div className="left"><img src={r.icon} alt="" /></div>
                    <div className="right">
                      <div>0{i + 1}</div>
                      <div>{r.title}</div>
                      <div>{r.dec}</div>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <Footer></Footer>
        </div>


      </>

    )
  }
  componentDidMount() {

  }
  getMyInfo(info){
    console.log(info,"我是商品页面")
    this.setState({
      
    },()=>{
      // this.countDown();
    })
  }
}

export default Login