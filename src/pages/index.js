import React from 'react'
import Link from 'gatsby-link'
import CMS from 'netlify-cms'

const IndexPage = () => ( <
    div >
    <
    h1 > Hi people < /h1> <
    p > Welcome to your new Gatsby site. < /p> <
    p > Now go build something great. < /p> <
    Link to = "/page-2/" > Go to page 2 < /Link> < /
    div >
)

CMS.registerPreviewTemplate('my-template', MyTemplate)

export default IndexPage