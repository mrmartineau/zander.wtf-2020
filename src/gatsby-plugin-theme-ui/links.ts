export const links = {
  articleListItem: {
    p: 4,
    display: 'block',
    transition: 'all 200ms ease-in-out ',
    color: 'text',
    '&:link, &:visited': {
      borderBottom: 0,
      color: 'text',
      textDecoration: 'none',
    },
    '&:hover': {
      color: 'background',
      bg: 'text',
    },
  },

  nav: {
    px: 3,
    py: 1,
    textTransform: 'uppercase',
    display: 'block',
    fontWeight: 'normal',
    fontFamily: 'mono',
    fontSize: 1,
    transition: 'all 200ms ease-in-out ',
    '&:hover,&:focus': {
      bg: 'navHover',
      color: 'text',
    },
  },

  pinboardListItemLink: {
    color: 'text',
    p: 4,
    display: 'block',
    textDecoration: 'none',

    '&:hover': {
      color: 'background',
      bg: 'text',
    },
  },
}
