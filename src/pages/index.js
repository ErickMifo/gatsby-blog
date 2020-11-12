import React, { useRef } from "react"
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby'
import './styles.css'
import Formulario from "../components/contato/form";
import Sobre from "../components/sobre";

export default function Home() {

  const contatoRef = useRef()

  const handleClickContato = () => {
      window.scrollTo({
          behavior: "smooth",
          top: contatoRef.current.offsetTop
      })
  }


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

   <Layout handleClickContato={handleClickContato}>
     <div className="posts">
       <h1>Posts: </h1>
     {data.allMarkdownRemark.edges.map((edge) => {
       return (
         <li> 
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

     <Formulario contatoRef={contatoRef} />

   </Layout>
   
  )
}
