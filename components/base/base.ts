import { makeItResponsive, styles } from '@vitus-labs/unistyle'
import { Element, List, Text } from '@vitus-labs/elements'
import rocketstyle from '@vitus-labs/rocketstyle'

export const element = rocketstyle()({
  name: 'Basic.Element',
  component: Element,
})
  .theme((t) => ({
    fontFamily: t.fontFamily.base,
    lineHeight: t.lineHeight.base,
    fontSize: t.fontSize.sm,
    color: 'white',
  }))
  .styles(
    (css) => css`
      box-sizing: border-box;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      ${({ onClick, href }) =>
        (onClick || href) &&
        css`
          cursor: pointer;
        `};

      ${makeItResponsive({ key: '$rocketstyle', styles, css })};
    `
  )

export const list = element
  .config({
    name: 'Basic.List',
    component: List,
  })
  .styles(
    (css) => css`
      margin: 0;
      padding: 0;
      list-style-type: none;
    `
  )

export const text = element.config({
  name: 'Basic.Text',
  component: Text,
})

export const link = element
  .attrs(({ onClick, href }) => ({
    tag: href ? 'a' : onClick ? 'button' : 'span',
  }))
  .styles(
    (css) => css`
      ${({ tag }) =>
        tag === 'button' &&
        css`
          border: none;
        `};
    `
  )
