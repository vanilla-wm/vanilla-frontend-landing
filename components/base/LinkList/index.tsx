import { list } from 'base/base'

export default list
  .config({ name: 'LinkList' })
  .attrs(({ vertical }) => {
    if (vertical) {
      return {
        block: true,
        contentAlignX: 'center',
        contentAlignY: 'top',
        contentDirection: 'rows',
      }
    } else return
  })
  .variants((_, css) => ({
    vertical: {
      width: '100%',
      extendCss: css`
        margin-top: 48px !important;

        & > * + * {
          margin-left: 0 !important;
          margin-top: 50px;
          text-align: center;
        }
      `,
    },
  }))
  .styles(
    (css) => css`
      & > * + * {
        margin-left: 40px;
      }
    `
  )
