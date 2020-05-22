export const links = {
  articleListItem: {
    p: 'padding',
    display: 'block',
    color: 'text',
    '&:link, &:visited': {
      borderBottom: 0,
      color: 'text',
      textDecoration: 'none',
    },
    '&:hover': {
      color: 'background',
      bg: 'accent',
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
      color: 'background',
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

    '&:hover': {
      color: 'background',
      bg: 'text',
    },
  },

  inverted: {
    color: 'background',
    '&:hover': {
      color: 'primary',
    },
  },
}
