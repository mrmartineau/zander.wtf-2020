import { transparentize } from '@theme-ui/color'

export const text = {
  monoVariant: {
    fontFamily: 'mono',
    fontWeight: 'normal',
  },
  monoVariantItalic: {
    fontFamily: 'mono',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  articleTitle: {
    fontSize: [7, 8],
    mb: 4,
    lineHeight: 'none',
    fontFamily: 'title',
  },

  articleSubTitle: {
    fontSize: [3, 4],
    variant: 'text.monoVariantItalic',
    mb: 3,
    lineHeight: 'heading',
    opacity: '0.8',
  },

  articleListItemTitle: {
    variant: 'text.monoVariantItalic',
    fontSize: [3, 4],
    maxWidth: 'contentMaxWidth',
  },

  articleListItemSubtitle: {
    variant: 'text.monoVariant',
    fontSize: [1, 2],
    opacity: 0.8,
    maxWidth: 'contentMaxWidth',
  },

  metadata: {
    variant: 'text.monoVariant',
    fontSize: 1,
    textTransform: 'uppercase',
    opacity: 0.6,
  },

  articleListItemMetadata: {
    variant: 'text.metadata',
  },

  articleMetadata: {
    variant: 'text.metadata',
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
    variant: 'text.monoVariant',
    fontSize: 0,
    textTransform: 'uppercase',
    transform: 'rotate(-90deg)  translateX(-0.85rem)',
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
    variant: 'text.monoVariantItalic',
    fontSize: 3,
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
    fontSize: [2, 3],
    fontWeight: 'normal',
    textTransform: 'uppercase',
    mb: 2,
  },

  introDescription: {
    fontFamily: 'body',
    fontStyle: 'italic',
    fontSize: [2, 3],
    opacity: '0.8',
  },
}
