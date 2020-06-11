export const buttons = {
  copyCode: {
    px: 2,
    py: 1,
    fontSize: 0,
    fontFamily: 'sans',
    bg: 'codeCopyButtonBg',
    userSelect: 'none',
    color: 'text',
    border: theme => `1px solid ${theme.colors.codeCopyButtonBorder}`,
    borderRadius: 'large',
    ml: 'auto',
    '&:hover,&:focus': {
      bg: 'codeCopyButtonBgHover',
    },
  },
  // feedTabButton: {
  //   color: 'text',
  //   bg: 'background',
  //   borderRadius: 0,
  //   '&:hover': {
  //     color: 'background',
  //     bg: alpha('text', 0.5),
  //   },
  //   '&[data-selected]': {
  //     color: 'background',
  //     bg: 'text',
  //   },
  // },
}
