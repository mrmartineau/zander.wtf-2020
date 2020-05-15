/** @jsx jsx */
import { FunctionComponent } from 'react'
import { jsx } from 'theme-ui'
import { SquareIconProps } from './icons.models'

export const External: FunctionComponent<SquareIconProps> = ({
  size,
  sx,
  ...rest
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      sx={{
        display: 'block',
        width: size,
        height: size,
        ...sx,
      }}
      {...rest}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3" />
    </svg>
  )
}
