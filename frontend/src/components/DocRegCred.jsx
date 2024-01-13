import React from 'react'

function DocRegCred() {
  return (
    <div className="introduction">  

      <div className="Second-row">
        <div className="row2-fields">
          <label>UserName</label>
          <input type="text" name="" placeholder='Enter Your UserName' id="" />
        </div>
        <div className="row2-fields">
          <label>Password</label>
          {/* Use 'multiple' attribute to allow selecting multiple files */}
          <input
            type="password"
            name=""
            placeholder="Your Password"
            id=""
          />
        </div>
        <div className="row2-fields">
          <label>Confirm Password</label>
          {/* Use 'multiple' attribute to allow selecting multiple files */}
          <input
            type="password"
            name=""
            placeholder="Your Password Again"
            id=""
          />
        </div>

      </div>
    </div>
  )
}

export default DocRegCred