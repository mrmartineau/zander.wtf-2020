export const links = {
  articleListItem: {
    p: 'padding',
    display: 'block',
    '&:link, &:visited': {
      borderBottom: 0,
      color: 'text',
      textDecoration: 'none',
    },
    '&:hover,&:focus': {
      color: 'articleListItemHoverText',
      bg: 'primary',
    },
  },

  nav: {
    px: [2, 3],
    py: 1,
    textTransform: 'uppercase',
    display: 'block',
    fontWeight: 'normal',
    fontFamily: 'mono',
    fontSize: 2,
    cursor: 'pointer',
    '&:link,&:visited': {
      borderBottom: 0,
      textDecoration: 'none',
      color: 'mastheadText',
    },
    '&:hover,&:focus': {
      color: 'primary',
    },
  },

  footerNav: {
    px: [2, 3],
    py: 1,
    textTransform: 'uppercase',
    display: 'block',
    fontWeight: 'normal',
    fontFamily: 'mono',
    fontSize: 2,
    cursor: 'pointer',
    '&:link,&:visited': {
      borderBottom: 0,
      textDecoration: 'none',
      color: 'text',
    },
    '&:hover,&:focus': {
      color: 'primary',
    },
  },

  pinboardListItemLink: {
    color: 'text',
    p: 'padding',
    display: 'block',
    textDecoration: 'none',
    '&:hover,&:focus': {
      color: 'articleListItemHoverText',
      bg: 'primary',
    },
  },

  inverted: {
    color: 'mastheadText',
    '&:hover,&:focus': {
      color: 'primary',
    },
  },
}
