import React from "react"
import Header from "./header"
import Footer from "./footer"
import Navigation from "./navigation"
import Sidebar from "./sidebar"
import { Link, useStaticQuery, graphql } from "gatsby"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header isHomePage={isHomePage} />
      <Navigation />

      <main>{children}</main>
      <Sidebar />

      <Footer />
    </div>

    ////
  )
}
export default Layout
