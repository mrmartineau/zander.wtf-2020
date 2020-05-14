export const text = {
  articleTitle: {
    fontSize: 8,
    mb: 2,
    lineHeight: 'none',
  },

  articleSubTitle: {
    fontSize: 4,
    fontFamily: 'mono',
    fontStyle: 'italic',
    fontWeight: 'normal',
    mb: 3,
    lineHeight: 'heading',
  },

  articleListItemTitle: {
    fontFamily: 'heading',
    fontSize: 4,
  },

  articleListItemSubtitle: {
    fontFamily: 'mono',
    fontSize: 3,
    fontStyle: 'italic',
  },

  articleListItemMetadata: {
    fontFamily: 'mono',
    fontSize: 1,
    textTransform: 'uppercase',
  },

  articleMetadata: {
    fontFamily: 'mono',
    fontSize: 1,
    textTransform: 'uppercase',
  },

  projectListItemTitle: {
    pl: '2rem',
    fontSize: [5, 8],
    textTransform: 'uppercase',
    lineHeight: 'none',
    '&:hover,&:focus, [open] &': {
      color: 'hsla(0,0%,95%,.01)',
      textShadow: 'none',
      '-moz-text-stroke-color': '#fff',
      '-webkit-text-stroke-color': '#fff',
      textStrokeColor: '#fff',
      '-moz-text-stroke-width': '1px',
      '-webkit-text-stroke-width': '1px',
      textStrokeWidth: '1px',
    },
  },

  projectListItemTitleYear: {
    fontFamily: 'mono',
    fontSize: 0,
    textTransform: 'uppercase',
    transform: 'rotate(-90deg)  translateX(-0.65rem)',
    width: '0',
    height: '0',
    textAlign: 'center',
    lineHeight: '20px',
  },

  projectListItemDescription: {
    fontFamily: 'body',
    fontStyle: 'italic',
    fontSize: 4,
    fontWeight: 'body',
    mb: 4,
  },

  pinboardListItemTitle: {
    fontFamily: 'body',
    fontStyle: 'italic',
    fontSize: 3,
    fontWeight: 'body',
    maxWidth: '70ch',
    mb: 1,
  },

  pinboardListItemDescription: {
    fontSize: [1, 2],
    opacity: '0.8',
    maxWidth: '70ch',
  },

  pinboardListItemUrl: {
    fontFamily: 'mono',
    fontSize: 1,
    opacity: '0.6',
  },
}
