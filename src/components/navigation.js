import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpMenu(name: { eq: "main" }) {
        menuItems {
          nodes {
            url
            label
            id
          }
        }
      }
    }
  `)
  const menuItems = data.wpMenu.menuItems.nodes
  return (
    <div>
      <nav className="flex navigationBar">
        <ul>
          {menuItems.map(el => {
            return (
              <Link
                key={el.id}
                to={el.url}
                style={{
                  textDecoration: "none",
                  paddingLeft: "30px",
                  color: "black",
                  opacity: 0.6,
                }}
              >
                <li className="li">{el.label}</li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
