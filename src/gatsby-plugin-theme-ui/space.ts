export const space: string[] & {
  padding?: string
} = [
  '0',
  '0.25rem',
  '0.5rem',
  '1rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
  '3.5rem',
  '4rem',
  '8rem',
  '16rem',
  '32rem',
]

space.padding = space[4]
