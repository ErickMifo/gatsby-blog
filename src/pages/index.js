import React from "react"
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby'
import './styles.css'

export default function Home() {
  const data = useStaticQuery(graphql `
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
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

   <Layout>
     <div className="posts">
     {data.allMarkdownRemark.edges.map((edge) => {
       return (
         <li> 
            <Link to={`/blog/${edge.node.fields.slug}`}>
           <h2>{edge.node.frontmatter.title}</h2>
           <p>{edge.node.frontmatter.date}</p>
           </Link>
         </li>
       )
     })}
     </div>
   </Layout>
   
  )
}
