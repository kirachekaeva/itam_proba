import React from 'react'
import RegisterModal from "./RegisterModal"
import SignUpmodal from './SignUpmodal'

export default function SignUp() {
  return (
    <div>
        <body>
            <div className="container">
                <div className="img">
                  <img src={`${process.env.PUBLIC_URL}/Group 18.png`} alt="Group 18" />
                </div>
                <SignUpmodal/>
            </div>
        </body>
    </div>
  )
}
