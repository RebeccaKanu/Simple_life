import React from "react"

const Footer = props => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {` `}
      And <a href="https://wordpress.org/">WordPress</a>
    </footer>
  )
}

export default Footer
