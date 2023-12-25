import React from 'react'
import tom from '../../assets/img/image 47.png'
import tviter from '../../assets/img/Group.png'
import li from '../../assets/img/li.png'
import "./index.scss"
function About_tom_k() {
    return (
        <div id='tom_k'>
            <div className="container">
            <div className="box">
                <div className="imgbox">
                    <img src={tom} alt="" />
                </div>
                <div className="textbox">
                    <div className="titlebox">
                        <p className='title'>Emma Watson</p>
                        <p>Founder & Chairman</p>
                    </div>
                    <div className="logbox">
                        <div className="logo">
                            <img src={tviter} alt="" />
                        </div>
                        <div className="logo">
                            <img src={li} alt="" />
                        </div>
                        <div className="logo">
                            <img src={tviter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
             </div>
    )
}

export default About_tom_k