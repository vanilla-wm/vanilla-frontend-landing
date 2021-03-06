import { makeItResponsive, styles } from '@vitus-labs/unistyle'
import { Element, List, Text } from '@vitus-labs/elements'
import { omit, pick } from '@vitus-labs/core'
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

      ${({ $rocketstyle, $rocketstate }) => {
        const baseTheme = {
          ...omit($rocketstyle, ['base', 'hover', 'focus', 'active']),
          ...pick($rocketstyle, ['base']).base,
        }

        const hoverTheme = pick($rocketstyle, ['hover'])
        const focusTheme = pick($rocketstyle, ['focus'])
        const activeTheme = pick($rocketstyle, ['active'])

        const _baseTheme = makeItResponsive({
          theme: baseTheme || {},
          styles,
          css,
        })

        const _hoverTheme = makeItResponsive({
          theme: hoverTheme.hover || {},
          styles,
          css,
        })

        const _focusTheme = makeItResponsive({
          theme: focusTheme.focus || {},
          styles,
          css,
        })

        const _activeTheme = makeItResponsive({
          theme: activeTheme.active || {},
          styles,
          css,
        })

        return css`
          ${_baseTheme};

          ${!$rocketstate.disabled &&
          !$rocketstate.active &&
          css`
            &:hover {
              ${_hoverTheme};
            }
          `};

          ${!$rocketstate.disabled &&
          css`
            &:focus {
              ${_focusTheme};
            }
          `};

          ${!$rocketstate.disabled &&
          css`
            &:active {
              ${_activeTheme};
            }
          `};

          ${!$rocketstate.disabled &&
          $rocketstate.active &&
          css`
            ${_activeTheme};
          `};
        `
      }}
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
