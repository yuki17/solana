import React, { Component } from 'react'
import { } from 'antd';
import { } from '@ant-design/icons';
import Logo from "../../image/logo_1.png"
import Twitter from "../../image/twitter.png"
import FaceBook from "../../image/faceBook.png"
import BottomBanner from "../../image/bottom_banner.png"
import './style.scss'
// import adminRoutes from '../../routes/adminRoutes.js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Footer extends Component {
    state = {
        list: [
            { type: "text", title: "Repurchase page" },
            { type: "text", title: "Mint" },
            { type: "text", title: "Fusion" },
            { type: "text", title: "Pledge" },
        ]
    };
    componentDidMount() {

    }
    render() {
        let { list } = this.state
        return (
            <div id="footer">
                <div className="img_box"><img src={BottomBanner} alt="" /></div>
                <div className="introduce">
                    <div className="logo_menu">
                        <div className="logo"><img src={Logo} alt="" /></div>
                        <div className="menu">
                            <div className="every_menu">
                                {
                                    list.map((r,i) => {
                                        return (
                                            r.type == "image"
                                                ?
                                                <div key={i}><img src={r.url} alt="" /></div>
                                                :
                                                <div key={i}>{r.title}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className="menu_url">
                                <div><span>FaceBook</span> <img src={FaceBook} alt="" /></div>
                                <div><span>twitter</span> <img src={Twitter} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="year">© Solana Pad 2021</div>
                </div>
               
            </div>
        )
    }
}

export default Footer