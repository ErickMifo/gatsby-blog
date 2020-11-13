import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import './styles.css'
import Sobre from "../components/sobre";

export default function Home() {


  const data = useStaticQuery(graphql `
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            preview
          }
          fields {
            slug
          }
        }
      }
    }
  }
  
  `)


  return (

<>

     <div className="posts">
       <h1>Posts: </h1>
     {data.allMarkdownRemark.edges.map((edge) => {
       return (
         <li key={edge.node.frontmatter.title}> 
            <Link to={`/blog/${edge.node.fields.slug}`}>
           <h2>{edge.node.frontmatter.title}</h2>
           <p>{edge.node.frontmatter.preview}</p>
           <p>{edge.node.frontmatter.date}</p>
           </Link>
         </li>
       )
     })}
     </div>

     <Sobre />

</>
   
  )
}
