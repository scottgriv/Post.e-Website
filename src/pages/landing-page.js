import React from "react"
import { Link } from "gatsby" // comment out if not using, and set <Layout> to <></> below
import Layout from "../components/layout"

export default function LandingPage() {
  return (
    <Layout>
      <div id="landinglogo">
        <Link to="/">
          <br />
          <img
            src="/images/landing/landing-banner.png"
            alt="Post.e"
            title="Post.e"
            className="landing-logo"
          />
        </Link>
      </div>

      <div className="landing-container">
        <h1 className="landing-title">Post.e</h1>
      </div>
    </Layout>
  )
}
