import { element } from 'base/base'
import styled from 'styled-components'

export default element
  .config({ name: 'Heading' })
  .attrs({ tag: 'h1', contentAlignX: 'left' })
  .theme((t) => ({
    // textAlign: 'center',
    marginTop: t.spacing.reset,
    marginBottom: t.spacing.reset,
    fontFamily: t.fontFamily.mono,
    transition: '0.3s',
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary,
    },
  }))
  .variants((t) => ({
    title: {
      fontSize: { xs: 28, md: 48 },
      fontWeight: t.fontWeight.bold,
      marginBottom: 4,
      color: t.color.primary,
      textAlign: 'center',
    },
    level1: {
      fontSize: { xs: 24, lg: 30 },
      fontWeight: t.fontWeight.bold,
      marginBottom: { xs: 24, md: 48 },
      backgroundColor: t.color.primary,
      color: t.color.black,
      borderRadius: 60,
      borderRadiusBottomLeft: 0,
      paddingY: 12,
      paddingX: 32,
    },
    level2: {
      fontSize: { xs: 18, xl: 24 },
      fontWeight: t.fontWeight.semibold,
      marginY: 16,
    },
    level3: {
      marginY: 12,
      fontSize: { xs: 18, md: t.fontSize.xl },
      fontWeight: t.fontWeight.semibold,
    },
    subheading: {
      textAlign: 'center',
      fontFamily: t.fontFamily.base,
      fontWeight: 'normal',
      fontSize: { xs: 18, md: 24 },
      color: '#8E8E93',
    },
  }))
  .multiple((t) => ({
    reset: {
      paddingX: 0,
      paddingY: 0,
      backgroundColor: 'none',
    },
    left: {
      textAlign: 'left',
    },
    centered: {
      textAlign: 'center',
    },
    dark: {
      color: t.color.black,
    },
  }))


export const HeadingWrapper = styled.div`
  text-align: center;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`
