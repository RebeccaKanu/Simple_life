import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const RecentPost = () => {
  const data = useStaticQuery(graphql`
    query MyRecentPostQuery {
      allWpPost(sort: { order: DESC, fields: date }, limit: 10) {
        nodes {
          title
          date
          uri
        }
      }
    }
  `)
  const post = data.MyRecentPostQuery.nodes
  return (
    <ul>
      <div className="">
        {post.map(el => {
          return <a href={el.uri}>{el.title}</a>
        })}
      </div>
    </ul>
  )
}

export default RecentPost
