import React from 'react'
import GoogleLogin from "@leecheuk/react-google-login"
import { Tooltip } from 'react-bootstrap'
import {GooglePlusOutlined,FacebookOutlined} from "@ant-design/icons"

export default function SocialNetworks() {
  return (
    <div className='socialIconContainer'>
        <GoogleLogin
            render={(renderProps)=>(
               <Tooltip title='Google+' placement='bottom' color="#db4a39"
               key="#db4a39">
                <div className="social google">
                    <GooglePlusOutlined/>
                </div>
               </Tooltip> 
            )}
           buttonText='Login'
        />
        <Tooltip
        title="Facebook"
        placement="bottom"
        color="#4267B2"
        key="#4267B2"
      >
        <div className="social facebook">
          <FacebookOutlined />
          <div></div>
        </div>

      </Tooltip>
    </div>
  )
}
