/** @jsx jsx */
import { FunctionComponent } from 'react'
import { jsx } from 'theme-ui'
import { IconProps } from './icons.models'

export const ArrowDown: FunctionComponent<IconProps> = ({ sx, ...rest }) => {
  return (
    <svg
      viewBox="0 0 120 375"
      fill="none"
      sx={{
        color: 'text',
        display: 'block',
        ...sx,
      }}
      {...rest}
    >
      <path
        d="M59.616 374.48l59.616-59.616-13.824-14.112-24.768 25.056-12.096 14.4-.864-.288 1.728-27.936V0H49.824v311.984l1.728 27.936-.864.288-12.096-14.4-24.768-25.056L0 314.864l59.616 59.616z"
        fill="currentColor"
      />
    </svg>
  )
}
