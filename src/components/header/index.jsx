import React, { Component } from 'react'
import { Modal } from 'antd';
import { getIndexInfo } from "api"
import { } from '@ant-design/icons';
import Logo from "../../image/logo_1.png"
import Right from "../../image/right.png"
import * as web3 from '@solana/web3.js';
import * as bs58 from "bs58";
import './style.scss'
// import adminRoutes from '../../routes/adminRoutes.js'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
// import { util } from 'webpack';
import util from 'utils';
const connection = new web3.Connection(
    web3.clusterApiUrl('mainnet-beta'),
    'confirmed',
  );
const history = createHashHistory()
@withRouter
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { type: "image", url: Logo },
                { type: "text", title: "Repurchase page", url: "/index" },
                { type: "text", title: "Mint", url: "/mint" },
                { type: "text", title: "Fusion", url: "/fusion" },
                { type: "text", title: "Pledge", url: "/Pledge" },
                { type: "text", title: "Launchpad (soon)", url: "/goodsList" },
            ],
            isWalletShow: false,
            someWallet: [
                { name: "PHANTOM" },
                { name: "SOLFLARE" },
                { name: "CLOVER" },
                { name: "SLOPE" },
            ],
            accountInfo:{},
            myStep: { }
        };
       
    }
    componentWillMount(){
        this.getAccountInfo()
    }
    componentDidMount() {
        this.getIndexInfo()
       
    }
    getIndexInfo() {
        getIndexInfo().then(res => {
            console.log(res)
            if (res.data.code == 0) {
                this.props.onMyStep(res.data.res)
                this.setState({
                    myStep: res.data.res
                }, () => {
                    let nowTime = parseInt(new Date().getTime() / 1000)
                    if(this.state.myStep.step == 0  || nowTime < this.state.myStep.startTime){
                        this.props.history.push("/index")
                    } else if (this.state.myStep.step == 1) { //倒计时阶段
                        // this.props.history.push("/goodsList")
                        this.props.history.push("/mint")
                    } else if (this.state.myStep.step == 2) {
                        this.props.history.push("/")
                    }
                })
            }

        })
    }
    
    async openWallet() {
        var exist = await util.existSolana();
        if (exist) {
            console.log("solana", window.solana)
            var connect = await window.solana.connect();
            console.log("connected!", connect.publicKey.toString())
        }
    }
    async getAccountInfo() {
        var exist = await util.existSolana();
        if (exist) {
            console.log(111)
            let publicKey = await this.openPhantomGetPublicKey()
            // console.log(222, publicKey, solWeb)
            let account = await connection.getAccountInfo(publicKey);
            if (account != null) {
                console.log("账户信息", account);
                console.log("余额SOL", account.lamports > 0 ? account.lamports / 1000000000 : 0);
                console.log("是否包含程序（并且严格为只读）", account.executable);
                console.log("下一次欠租的时期", account.rentEpoch);
                console.log("关联的令牌状态数据", account.data);
                console.log("账户所有者base58", account.owner);
                this.setState({
                    accountInfo:account
                })
            }
            return account
        }else{
            console.log(222)
        }
        return null
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
  
    render() {
        let { list, isWalletShow, someWallet } = this.state
        return (
            <div id="header">
                <div className="top_box">
                    <div className="left_box">
                        {
                            list.map((r, i) => {
                                return (
                                    r.type == "image"
                                        ?
                                        <div key={i}><img src={r.url} alt="" /></div>
                                        :
                                        <div key={i} onClick={() => {
                                            console.log(this.props)
                                            // this.props.history.push({ pathname: r.url })
                                            // history.push(r.url)
                                            // window.location.href=r.url
                                        }}>{r.title}</div>
                                    // <Link to={r.url}>{r.title}</Link>
                                )
                            })
                        }
                    </div>
                    <div className="right_box" onClick={() => { this.setState({ isWalletShow: true }) }}>Connect Wallet</div>
                </div>
                <Modal title="" visible={isWalletShow} onCancel={() => { this.setState({ isWalletShow: false }) }} footer={null}>
                    <div className="logo_box">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="wallet_box">
                        <div className="title">Connect Wallet</div>
                        {
                            someWallet.map((r, i) => {
                                return (
                                    <div className="every_wallet" key={i} onClick={() => {
                                        this.openWallet()
                                    }}>
                                        <div><img src={Logo} alt="" /></div>
                                        <div>{r.name}</div>
                                        <div><img src={Right} alt="" /></div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </Modal>
            </div>
        )
    }
}

export default Header