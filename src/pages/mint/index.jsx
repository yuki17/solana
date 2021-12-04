import React, { Component } from 'react'
import { Select, Input, InputNumber } from 'antd';
import { connect } from 'react-redux'
import { beforApply } from "api"
import { doLogin } from 'store/user/actionCreators'
import Header from "@/components/header/index"
import Footer from "@/components/footer/index"
import { withRouter } from "react-router-dom";
import * as web3 from '@solana/web3.js';
import * as bs58 from "bs58";
import './index.scss';
import Right from "../../image/right.png"
import person_1 from "../../image/person_1.png"
import ProduceInfo from "../../image/produce_info.png"
import util from "utils"
// import { util } from 'echarts';
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
const { Option } = Select;
const network = "devnet"
var cluster = ""
if (network=="devnet") {
  cluster="?cluster=devnet"
}
const connection = new web3.Connection(
  // web3.clusterApiUrl('mainnet-beta'),
  web3.clusterApiUrl(network),
  'confirmed',
);
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
class Mint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      myInfo: {},
      deposit_num: null,
      solStr: 0
    }
  }
  render() {
    let { myInfo, menuList, activeMenuIndex, activeMenuItem,
      goodsList, scrollTop, offTop, pageNum, drawerShow,
      day, hours, minutes, seconds, } = this.state
    return (
      <>
        <div className="mint">
          <Header onMyStep={this.getMyInfo.bind(this)}></Header>
          <div className="top_banner">
            <img src={person_1} alt="" />
          </div>
          <div className="mid_box">
            <div className="progress">
              <div className="line">
                <div><div>1</div></div>
                <div></div>
                <div></div>
                <div><div>2</div></div>
                <div></div>
                <div></div>
                <div><div>3</div></div>
              </div>

              <div className="word">
                <div>Subscription</div>
                <div>Confirm</div>
                <div>Result</div>
              </div>

            </div>
            <div className="info">
              <div className="top_word">Mint subscription</div>
              <div className="input_label">Subscription quantity</div>
              <div className="input_info">
                <div>
                  <InputNumber type="number"
                    placeholder={myInfo.quantityMin + "-" + myInfo.quantityMax}
                    defaultValue={this.state.deposit_num}
                    bordered={false} controls={false}
                    min={myInfo.quantityMin}
                    max={myInfo.quantityMax}
                    key={this.state.deposit_num}
                    onChange={(e) => {
                      // this.beforApply(e)
                      let arr = this.state.myInfo.price.filter(item => item.max >= e && item.min <= e)
                      if (arr.length > 0) {
                        this.setState({
                          solStr: e * (Number(arr[0].sol) * 1000)  / 1000
                        })
                      }

                    }}
                  />
                </div>
                <div>
                  <img src={ProduceInfo} alt="" />
                  <div>
                    <span>{this.state.solStr}</span>
                    <span className="dw">SOL</span>
                  </div>

                </div>
              </div>
              <div className="select_num">
                <div>
                  <span onClick={() => this.setState({ deposit_num: 10 })}>{this.state.myInfo.price && this.state.myInfo.price[0].max}</span>
                  <span onClick={() => this.setState({ deposit_num: 15 })}>{this.state.myInfo.price && this.state.myInfo.price[1].max}</span>
                  <span onClick={() => this.setState({ deposit_num: 20 })}>{this.state.myInfo.price && this.state.myInfo.price[2].max}</span>
                  <span onClick={() => this.setState({ deposit_num: 30 })}>{this.state.myInfo.price && this.state.myInfo.price[3].max}</span>
                </div>
                <div> 0.30-0.50 SOL</div>
              </div>
              <div className="deposit_btn" onClick={() => this.appSol()} >Deposit</div>
            </div>
            <div className="my_sol">
              <div className="time_box">
                <div className="left">
                  <div className="label_title">End of sales period</div>
                  <div className="countTime">
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
                      <div className="point"></div>
                    </div>
                  </div>
                </div>
                <div className="left">
                  <div className="label_title">End of grace period</div>
                  <div className="countTime">
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
                      <div className="point"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panl_box">
                <div className="every_panl">
                  <div>Average subscription</div>
                  <div>0</div>
                </div>
                <div className="every_panl">
                  <div>Current subscription</div>
                  <div>0</div>
                </div>
                <div className="every_panl">
                  <div>Estimated unit price</div>
                  <div>0</div>
                </div>
                <div className="every_panl">
                  <div>Subscription scope</div>
                  <div>0</div>
                </div>
                <div className="every_panl">
                  <div>Current pledge amount</div>
                  <div>0</div>
                </div>
                <div className="every_panl">
                  <div>Whether to invest</div>
                  <div>0</div>
                </div>
              </div>
              <div className="bottom_title">
                <div></div>
                <div>Total NFT sales</div>
                <div></div>
              </div>
              <div className="all_sol">40000</div>
            </div>
          </div>
          <Footer></Footer>
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
  getMyInfo(info) {
    console.log(info, "我是商品页面")
    this.setState({
      myInfo: info
    }, () => {
      // this.countDown();
    })
  }
  beforApply() {
    let params = {
      pubKey: this.state.myInfo.wallet,
      solStr: String(this.state.solStr),
    }
    beforApply(params).then(res => {
      if (res.data.code == 0) {

      }
    })
  }
  async openPhantomGetPublicKey() {
    var exist = await util.existSolana();
    if (exist) {
      // console.log("solana", window.solana)
      var connection = await window.solana.connect();
      console.log("钱包", connection.publicKey, connection)
      return connection.publicKey ? connection.publicKey : ''
    }
  }
  async appSol() {
    var exist = await util.existSolana();
    let that = this
    if (exist) {
      let fromPubkey = await this.openPhantomGetPublicKey()

      console.log('that.state.myInfo.wallet', that.state.myInfo.wallet)
      let toPubkey = new web3.PublicKey(that.state.myInfo.wallet)
      // let newPub = new web3.PublicKey(fromPubkey)

      let recentBlockhash = (await connection.getRecentBlockhash()).blockhash
      let transaction = new web3.Transaction().add(
        web3.SystemProgram.transfer({
          fromPubkey: fromPubkey,
          toPubkey: toPubkey,
          lamports: 100000000, // 1 SOL

        })
      );
      // console.log({
      //   fromPubkey: newPub,
      //   toPubkey: toPubkey,
      //   lamports: (that.state.solStr * 1000000000), // 1 SOL

      // })
      transaction.feePayer = fromPubkey // 手续费 0.000005 SOL
      transaction.recentBlockhash = recentBlockhash
      try {
        let { signature } = await window.solana.request({
          method: "signAndSendTransaction",
          params: {
            message: bs58.encode(transaction.serializeMessage()),
          },
        });
        console.log(`signature: https://solscan.io/tx/${signature}${cluster}`);
        await that.getBalance(fromPubkey.publicKey)
        // await this.getBalance(fromPubkey)
        await that.getBalance(toPubkey)
      } catch (err) {
        console.log(err)
      }
    }
  }
  async getBalance(publicKey) {
    let balance = await connection.getBalance(publicKey);
    console.log(publicKey.toString(), "余额SOL", balance > 0 ? balance / 1000000000 : 0);
  }
}

export default withRouter(Mint)