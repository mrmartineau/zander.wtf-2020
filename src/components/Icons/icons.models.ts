import { SxStyleProp } from 'theme-ui'
import { SVGProps } from 'react'

export interface BaseIcon extends SVGProps<SVGSVGElement> {
  sx?: SxStyleProp
  // className?: string
  // style?: React.CSSProperties
}

export interface IconProps extends BaseIcon {
  width?: string
  height?: string
}

export interface SquareIconProps extends BaseIcon {
  size?: string
}
