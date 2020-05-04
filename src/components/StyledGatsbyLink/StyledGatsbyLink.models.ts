import { SxStyleProp } from 'theme-ui'
import { Link } from 'gatsby'

export interface StyledGatsbyLinkProps {
  href?: string
  to?: string
  sx?: SxStyleProp

  // INFO: This has to be ignored because Theme UI's TS types are not ready to
  // allow for the `as` prop yet. We should be able to remove this when the
  // next version of Theme UI is released
  // Ref: https://github.com/system-ui/theme-ui/issues/342
  // Ref: https://blog.andrewbran.ch/polymorphic-react-components/
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  as: 'a' | Link
}
