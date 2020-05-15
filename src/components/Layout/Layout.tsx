import React, { Fragment, FunctionComponent } from 'react'
import { Global } from '@emotion/core'
import { reset, fontFace, responsiveFontSizing, global } from '../../styles'
import { Masthead } from '../Masthead'
import { MetaTags } from '../MetaTags'
import { SeoInterface } from '../MetaTags/MetaTags.models'

interface LayoutProps {
  seoData?: SeoInterface
}

export const Layout: FunctionComponent<LayoutProps> = ({
  seoData,
  children,
}): JSX.Element => {
  return (
    <Fragment>
      <Global styles={[reset, fontFace, responsiveFontSizing, global]} />
      <MetaTags seoData={seoData} />
      <Masthead />
      <main>{children}</main>
    </Fragment>
  )
}
