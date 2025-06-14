import { Regex } from '@companion-module/base'

export const ConfigFields = [
	{
		type: 'static-text',
		id: 'info',
		label: 'Information',
		width: 12,
		value: `
				Enter Ip address and port nr for the Xradio computer
			`,
	},
	{
		type: 'textinput',
		id: 'host',
		label: 'Target IP',
		width: 8,
		regex: Regex.IP,
	},
	{
		type: 'textinput',
		id: 'port',
		label: 'Target Port',
		width: 4,
		default: 5000,
		regex: Regex.PORT,
	},
]
