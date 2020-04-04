/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import ContextConsumer from "../context"
import FontFile from "./title.woff"

const XSJTitle = ()=> {
  return (
    <ContextConsumer>
      {({siteMetadata: {title, siteUrl}}) => {
        const style = {
          ml: 3,
          fontWeight: 'bold',
          fontSize: '1.5em',
          "@font-face": {
            fontFamily: `webfontxiaoshujiangtitle12`,
            src: `url(${FontFile})  format('woff')`,
            fontWeight: `normal`,
            fontStyle: `normal`,
          },
          fontFamily: 'webfontxiaoshujiangtitle12, sans-serif',
          a: {
            color: 'inherit',
            textDecoration: 'none'
          }
        }
        const fontStyle = {
        }
        return (
          <div sx={style}>
            <a href={siteUrl}>
              小书匠
            </a>
          </div>
        )
      }}
    </ContextConsumer>
  )
}


export default XSJTitle
