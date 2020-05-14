import React, { Fragment, FunctionComponent } from 'react'
import { Global } from '@emotion/core'
import { reset, fontFace, responsiveFontSizing, global } from '../../styles'
import { Masthead } from '../Masthead'

export const Layout: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <Global styles={[reset, fontFace, responsiveFontSizing, global]} />
      <Masthead />
      <main>{children}</main>
    </Fragment>
  )
}
