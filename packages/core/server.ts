import { getComponents, components } from './src/components/components'
import { initSharedEngine } from './src/engine'
import { Task } from './src/plugins/task/task'
import { ThothComponent } from './src/thoth-component'
import SpellRunner from './src/spellManager/SpellRunner'

export { getComponents } from './src/components/components'
export { Task } from './src/plugins/task/task'
export { initSharedEngine }
export { SpellRunner }

export * from './src/spellManager'
export * from './src/utils/chainHelpers'

export default {
  components,
  getComponents,
  initSharedEngine,
  Task,
  ThothComponent,
}
