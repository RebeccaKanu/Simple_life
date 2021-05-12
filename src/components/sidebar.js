import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const SideBar = () => {
  const data = useStaticQuery(graphql`
    query MySideBarQuery {
      allWpCategory {
        nodes {
          name
          uri
        }
      }
      allWpTag {
        nodes {
          name
          uri
        }
      }
      allWpPost(sort: { fields: date }, limit: 3) {
        nodes {
          title
          uri
          tags {
            nodes {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `)
  const categories = data.allWpCategory.nodes
  const tag = data.allWpTag.nodes
  const post = data.allWpPost.nodes
  return (
    <div>
      <nav className="sideBar">
        <p>Catégories</p>
        <ul>
          {categories.map(el => {
            return (
              <Link
                // key={el.id}
                to={el.uri}
                style={{
                  textDecoration: "none",
                  paddingLeft: "30px",
                  color: "black",
                  opacity: 0.6,
                }}
              >
                <li className="li">{el.name}</li>
              </Link>
            )
          })}
        </ul>
        {/*  */}
        <p>Tag</p>
        <ul>
          {tag.map(el => {
            return (
              <Link
                // key={el.id}
                to={el.uri}
                style={{
                  textDecoration: "none",
                  paddingLeft: "30px",
                  color: "black",
                  opacity: 0.6,
                }}
              >
                <li className="li">{el.name}</li>
              </Link>
            )
          })}
        </ul>

        {/*  */}

        <p>Posts récents</p>
        <ul>
          {post.map(el => {
            return (
              <Link
                // key={el.id}
                to={el.uri}
                style={{
                  textDecoration: "none",
                  paddingLeft: "30px",
                  color: "black",
                  opacity: 0.6,
                }}
              >
                <li className="li">{el.title}</li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
