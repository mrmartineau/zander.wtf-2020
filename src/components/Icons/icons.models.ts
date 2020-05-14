import { SxStyleProp } from 'theme-ui'

export interface BaseIcon {
  sx?: SxStyleProp
  className?: string
  style?: React.CSSProperties
}

export interface IconProps extends BaseIcon {
  width?: string
  height?: string
}

export interface SquareIconProps extends BaseIcon {
  size?: string
}
