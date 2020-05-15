import { transparentize } from '@theme-ui/color'

export const text = {
  monoVariant: {
    fontFamily: 'mono',
    fontWeight: 'normal',
  },

  articleTitle: {
    fontSize: [7, 8],
    mb: 2,
    lineHeight: 'none',
    fontFamily: 'title',
  },

  articleSubTitle: {
    fontSize: [3, 4],
    fontFamily: 'mono',
    fontStyle: 'italic',
    fontWeight: 'normal',
    mb: 3,
    lineHeight: 'heading',
  },

  articleListItemTitle: {
    fontFamily: 'title',
    fontSize: [3, 4],
  },

  articleListItemSubtitle: {
    fontFamily: 'mono',
    fontSize: [2, 3],
    fontStyle: 'italic',
  },

  articleListItemMetadata: {
    fontFamily: 'mono',
    fontSize: 1,
    textTransform: 'uppercase',
    opacity: 0.6,
  },

  articleMetadata: {
    fontFamily: 'mono',
    fontSize: 1,
    textTransform: 'uppercase',
    opacity: 0.6,
  },

  projectListItemTitle: {
    pl: '2rem',
    fontSize: [5, 8],
    fontFamily: 'title',
    textTransform: 'uppercase',
    lineHeight: 'none',
    '[open] &, &:hover &, &:focus &': {
      variant: 'text.projectListItemTitleActive',
    },
  },

  projectListItemTitleActive: {
    color: transparentize('text', 0.99),
    textShadow: 'none',
    MozTextStrokeColor: theme => theme.colors.text,
    WebkitTextStrokeColor: theme => theme.colors.text,
    textStrokeColor: theme => theme.colors.text,
    MozTextStrokeWidth: '1px',
    WebkitTextStrokeWidth: '1px',
    textStrokeWidth: '1px',
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
    fontSize: 3,
    fontWeight: 'body',
    mb: 4,
  },

  pinboardListItemTitle: {
    fontFamily: 'body',
    fontStyle: 'italic',
    fontSize: 3,
    fontWeight: 'body',
    maxWidth: 'contentMaxWidth',
    mb: 1,
  },

  pinboardListItemDescription: {
    fontSize: [1, 2],
    opacity: '0.8',
    maxWidth: 'contentMaxWidth',
  },

  pinboardListItemUrl: {
    fontFamily: 'mono',
    fontSize: 1,
    opacity: '0.6',
  },

  introTitle: {
    fontSize: [7, 9],
    lineHeight: 1,
    mb: 4,
    fontFamily: 'title',
  },

  introSuperTitle: {
    fontFamily: 'body',
    fontSize: 1,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    mb: 2,
  },

  introDescription: {
    fontFamily: 'body',
    fontStyle: 'italic',
    fontSize: [2, 3],
  },
}
