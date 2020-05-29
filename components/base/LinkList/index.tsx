import { list } from 'base/base'

export default list.config({ name: 'LinkList' }).styles(
  (css) => css`
    & > * + * {
      margin-left: 40px;
    }
  `
)
