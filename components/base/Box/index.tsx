import { element } from 'base/base'

export default element
  .config({ name: 'Box' })
  .attrs(({ icon }) => ({
    block: true,
    contentDirection: 'rows',
    contentAlignX: icon ? 'center' : undefined,
  }))
  .variants((t) => ({
    icon: {
      height: 140,
      width: 140,
      borderRadius: 40,
      borderRadiusTopLeft: 0,
      backgroundColor: '#202020',
      marginBottom: 16,
      color: t.color.primary,
      fontWeight: 'bold',
    },
  }))
  .multiple((t) => ({
    iconBigger: {
      width: '100%',
      backgroundColor: 'rgba(254, 182, 17, 0.2)',
      minWidth: 200,
      transition: '0.3s',
      hover: {
        backgroundColor: t.color.primary,
        color: t.color.black,
      },
    },
  }))
