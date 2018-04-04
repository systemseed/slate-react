import factory from './factory'
import slateHtmlSerializer from '../../package.json'

const configurations = [
  ...factory(slateHtmlSerializer),
]

export default configurations
