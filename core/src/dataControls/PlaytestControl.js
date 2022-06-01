import { DataControl } from '../plugins/inspectorPlugin'

export class PlaytestControl extends DataControl {
  constructor({
    dataKey,
    name,
    icon = 'hand',
    label = 'Toggle',
    defaultValue = {},
    ignored = [],
  }) {
    const options = {
      dataKey: dataKey,
      defaultValue,
      name,
      component: 'playtest',
      icon,
      data: {
        label,
        ignored,
      },
    }

    super(options)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onData(_playtestToggle) {
    return
  }
}
