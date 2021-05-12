import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Categories = () => {
  const data = useStaticQuery(graphql`
    query MyCategoriesQuery {
      allWpCategory {
        nodes {
          name
          uri
        }
      }
    }
  `)
  //
  const categories = data.allWpCategory.nodes
  //
  return (
    <div className="tag">
      {categories.map((element, index) => {
        return <a href={element.uri}>{element.name}</a>
      })}
    </div>
  )
}
export default Categories
