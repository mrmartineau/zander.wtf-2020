import React, { Fragment, FunctionComponent } from 'react'
import { Global } from '@emotion/core'
import { reset, fontFace, responsiveFontSizing } from '../../styles'

export const Layout: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <Global styles={[reset, fontFace, responsiveFontSizing]} />
      <main>{children}</main>
    </Fragment>
  )
}
