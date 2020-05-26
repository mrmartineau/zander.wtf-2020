import { transparentize } from '@theme-ui/color'

export const text = {
  /**
   * Reusable variants
   */
  monoVariant: {
    fontFamily: 'mono',
    fontWeight: 'normal',
  },
  monoVariantItalic: {
    fontFamily: 'mono',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  metadataVariant: {
    variant: 'text.monoVariant',
    fontSize: 1,
    textTransform: 'uppercase',
    opacity: 0.6,
  },
  headingVariant: {
    fontFamily: 'title',
  },

  /**
   * Specific variants
   */
  pageHeading: {
    fontFamily: 'title',
    textTransform: 'uppercase',
    p: 'padding',
    m: 0,
    fontSize: [7, '10vw'],
    lineHeight: 1,
    bg: 'mastheadBackground',
    color: 'mastheadText',
  },

  // Home
  introTitle: {
    fontSize: '14vw',
    lineHeight: 0.9,
    mb: 'padding',
    fontFamily: 'title',
    // span: {
    //   transition: 'all 200ms ease-in-out ',
    // },
    'span:hover': {
      color: 'primary',
      // backgroundImage: `linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)`,
      // WebkitBackgroundClip: 'text',
      // WebkitTextFillColor: 'rgba(255, 255, 255, 0.46)',
    },
  },
  introSuperTitle: {
    fontFamily: 'body',
    fontSize: [2, '2vw'],
    fontWeight: 'normal',
    textTransform: 'uppercase',
    mb: 2,
    fontStyle: 'normal',
    // color: theme => `${theme.colors.text} !important`,
    // background: 'text',
    WebkitBackgroundClip: 'border-box',
  },
  introDescription: {
    fontFamily: 'body',
    fontStyle: 'italic',
    fontSize: [2, '2.2vw'],
    opacity: '0.8',
  },

  // Articles
  articleTitle: {
    fontSize: [7, '5vw'],
    fontFamily: 'title',
    lineHeight: 'none',
    mb: 4,
    maxWidth: '16ch',
    mx: 'auto',
  },
  articleSubTitle: {
    fontSize: [3, 4],
    variant: 'text.monoVariantItalic',
    mb: 3,
    maxWidth: '50ch',
    mx: 'auto',
    lineHeight: 'heading',
    opacity: '0.8',
  },
  articleListItemTitle: {
    variant: 'text.monoVariantItalic',
    fontSize: 4,
    maxWidth: 'contentMaxWidth',
  },
  articleListItemSubtitle: {
    variant: 'text.monoVariant',
    fontSize: 2,
    opacity: 0.8,
    maxWidth: 'contentMaxWidth',
  },
  articleListItemMetadata: {
    variant: 'text.metadataVariant',
  },
  articleMetadata: {
    variant: 'text.metadataVariant',
  },

  // Projects
  projectListItemTitle: {
    pl: '2rem',
    fontSize: [5, 8],
    fontFamily: 'title',
    textTransform: 'uppercase',
    lineHeight: 'none',
    // '[open] &': {
    //   variant: 'text.projectListItemTitleActive',
    // },
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

  // Feeds
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
}
