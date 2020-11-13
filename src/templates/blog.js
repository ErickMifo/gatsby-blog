import React from 'react';
import { graphql } from 'gatsby';
import './styles.css'

export const query = graphql`
 query($slug: String!) {
     markdownRemark(fields: {slug: { eq: $slug } }) {
         frontmatter {
             title
             date
         }
         html
     }
 }
`


function Blog(props) {
    return( 
        <>
            <div className="pageContent"
            dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html }} />
            <p>{props.data.markdownRemark.frontmatter.date}</p>
        </>
    )
}

export default Blog