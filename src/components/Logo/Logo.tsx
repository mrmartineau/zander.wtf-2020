/** @jsx jsx */
import { FunctionComponent } from 'react'
import { jsx } from 'theme-ui'
import { SquareIconProps } from '../Icons/icons.models'

interface LogoProps extends SquareIconProps {
  stroke?: string
}

export const Logo: FunctionComponent<LogoProps> = ({
  stroke = 'none',
  sx,
  ...rest
}) => (
  <svg
    viewBox="0 0 200 200"
    strokeWidth="1"
    strokeLinecap="round"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      color: 'text',
      display: 'block',
      ...sx,
    }}
    {...rest}
  >
    <path d="M0 0h200L94 147l106 53H0L106 53 0 0z" stroke={stroke} />
  </svg>
)
