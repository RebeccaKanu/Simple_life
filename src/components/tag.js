import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Tag = () => {
  const data = useStaticQuery(graphql`
    query MyTagQuery {
      allWpTag {
        nodes {
          name
          uri
          count
          id
        }
      }
    }
  `)
  //
  const tag = data.allWpTag.nodes
  //
  return (
    <div className="tag">
      {tag.map((element, index) => {
        return <a href={element.uri}>{element.name}</a>
      })}
    </div>
  )
}
export default Tag
