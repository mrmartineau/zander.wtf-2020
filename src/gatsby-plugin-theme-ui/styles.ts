const heading = {
  fontFamily: 'heading',
  fontWeight: '300',
  lineHeight: 'heading',
  mt: 4,
  mb: 3,
}

export const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    fontSize: 2,
  },
  a: {
    '&:link, &:visited': {
      color: 'text',
      textDecoration: 'none',
      borderBottom: theme => `2px solid ${theme.colors.primary}`,
    },
    '&:hover,&:focus': {
      borderBottomColor: 'text',
    },
  },
  p: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    color: 'text',
    mb: '1.25rem',
  },
  h1: {
    ...heading,
    fontFamily: 'title',
    fontSize: 7,
  },
  h2: {
    ...heading,
    fontFamily: 'title',
    fontSize: 6,
  },
  h3: {
    ...heading,
    fontFamily: 'title',
    fontSize: 5,
  },
  h4: {
    ...heading,
    fontSize: 4,
  },
  h5: {
    ...heading,
    fontSize: 3,
    mb: 2,
  },
  h6: {
    ...heading,
    fontSize: 2,
    mb: 2,
  },
  img: {
    my: 4,
    p: 3,
    border: theme => `1px solid ${theme.colors.codeBackground}`,
    mx: 'auto',
    // bg: 'codeBackground',
    // boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)',
    display: 'block',
    borderRadius: 'default',
  },
  figure: {
    bg: 'primary',
  },
  figcaption: {
    bg: 'primary',
  },
  inlineCode: {
    fontSize: '1em',
    borderRadius: 'default',
    // fontWeight: 'inherit',
    fontWeight: 'semibold',
    '&::before, &::after': {
      content: "'`'",
    },
  },
  code: {
    m: 0,
    p: 3,
    pt: 2,
    fontSize: 1,
    color: 'text',
    bg: 'codeBackground',
    borderRadius: '0 0 0.25rem 0.25rem',
    overflowX: 'auto',
    '.comment,.prolog,.doctype,.cdata': {
      color: 'code7',
      fontStyle: 'italic',
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.string,.attr-value,.punctuation,.tag.script-punctuation,.tag.attr-value.punctuation': {
      color: 'code3',
    },
    '.entity,.url,.symbol,.number,.boolean,.constant,.property,.regex,.inserted,.attr-value,.tag.attr-value': {
      color: 'text',
    },
    '.function,.tag.function,.deleted,.variable,.unit': {
      color: 'code3',
    },
    '.function-variable': {
      color: 'code6',
    },
    '.tag,.keyword,.selector,.attr-name,.tag.attr-name': {
      color: 'code5',
    },
    '.symbol,.tag.punctuation': {
      color: 'code7',
    },
    '.property,.number': {
      color: 'code6',
    },
    '.rule,.class-name,.keyword.module,.operator,.tag': {
      color: 'code1',
    },
    '.function,.tag.function': {
      color: 'code4',
    },
    '&::-webkit-scrollbar': {
      width: '0.8rem',
      height: '0.8rem',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'scrollbarBg',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'scrollbar',
    },
  },
  // pre: {
  //   p: 3,
  //   color: 'text',
  //   bg: 'codeBackground',
  //   borderRadius: 'default',
  //   overflowX: 'auto',
  // },
  blockquote: {
    borderLeft: '4px solid',
    borderColor: 'muted',
    fontFamily: 'mono',
    textStyle: 'italic',
    pl: 3,
    my: 4,
    mx: 0,
  },
  hr: {
    height: '0.4rem',
    width: '20%',
    bg: 'text',
    display: 'block',
    my: 6,
    border: 0,
    mx: 0,
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
    borderBottomColor: 'background',
    p: 2,
    fontWeight: 'bold',
    fontSize: 3,
    lineHeight: 1,
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
    borderBottomColor: 'background',
    p: 2,
  },
  ul: {
    listStylePosition: 'inside',
  },
  ol: {
    listStylePosition: 'inside',
  },
}
