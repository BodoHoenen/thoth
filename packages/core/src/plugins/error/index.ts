import { IRunContextEditor, NodeData, ThothComponent } from '../../../types'
import { ThothConsole } from '../debugger/ThothConsole'

function install(
  engine: IRunContextEditor,
  { server = false, throwError }: { server?: boolean; throwError?: Function }
) {
  engine.on(
    'error',
    ({ message, data }: { message: string; data: NodeData }) => {
      const component = engine.components.get(
        data.name
      ) as unknown as ThothComponent<unknown>

      if (!component) return

      const console = new ThothConsole({
        node: data,
        component,
        editor: engine,
        server,
        throwError,
        isEngine: true,
      })

      if (message === 'Recursion detected') {
        const error = new Error(`Recursion occured in node ID ${data.id}`)

        console.error(error)
      }
    }
  )
}

const defaultExport = {
  name: 'error',
  install,
}

export default defaultExport
