import React from "react"
import { CONFIG } from "./config.js"
import Icon from "../components/icons/icon.js"

const Footer = () => {
  const showFooter = CONFIG.showFooter

  return (
    <>
      <hr />
      <div id="pagefoot" style={{ display: showFooter ? "block" : "none" }}>
        <div className="social-links-wrapper">
          <div className="social-links-footer" >
          <a
              href="https://nightowllabs.io"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="NOL" className="bounce" />
            </a>
            <a
              href="https://github.com/scottgriv/Post.e"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-bounce"></i>
            </a>
            <a
              href="https://github.com/scottgriv/Post.e-Website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-fork fa-bounce"></i>
            </a>
            <a
              href="mailto:support@nightowllabs.io"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope fa-bounce"></i>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            padding: "10px",
          }}
        >
          <div
            style={{
              height: "32px",
              width: "114px",
              overflow: "hidden",
              borderRadius: "6px",
            }}
          >
            <iframe
              src="https://github.com/sponsors/scottgriv/button"
              title="Sponsor scottgriv"
              style={{
                border: 0,
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
              padding: "10px",
            }}
          >
            <div
              style={{
                height: "32px",
                width: "114px",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            >
              <a
                className="regular-link"
                href="https://www.buymeacoffee.com/scottgriv"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  className="support-logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div id="pagefoot">
          Copyright © 2024-{new Date().getFullYear()} Scott Grivner & Night Owl Labs, LLC.<br />All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
