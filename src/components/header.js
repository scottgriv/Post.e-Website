import React from "react"
import { Link } from "gatsby"
import { CONFIG } from "./config.js"

const Header = () => {
  const showHeader = CONFIG.showHeader

  return (
    <>
      <div id="pagehead" style={{ display: showHeader ? "block" : "none" }}>
        <div id="headlogo">
          <Link to="/">
            <img
              src="/images/main/banner_large.png"
              alt="Post.e"
              title="Post.e"
              className="desktop-logo"
            />
            <img
              src="/images/main/banner_small.png"
              alt="Post.e"
              title="Post.e"
              className="mobile-logo"
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
