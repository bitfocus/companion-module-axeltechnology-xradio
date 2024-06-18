const CHOICES_END = [
	{ id: '', label: 'None' },
	{ id: '\n', label: 'LF - \\n (Common UNIX/Mac)' },
	{ id: '\r\n', label: 'CRLF - \\r\\n (Common Windows)' },
	{ id: '\r', label: 'CR - \\r (Old MacOS)' },
	{ id: '\x00', label: 'NULL - \\x00 (Can happen)' },
	{ id: '\n\r', label: 'LFCR - \\n\\r (Just stupid)' },
]

export function getActionDefinitions(self) {

	return {
		//----------------------------------------------------------------
		HotKey_Press: {
			name: 'HotKey_Press',
			options: [
				{
					type: 'dropdown',
					id: 'id_end',
					label: 'Command End Character:',
					default: '\r',
					choices: CHOICES_END,
				},
				{
					type: 'textinput',
					id: 'index',
					label: 'Command Index',
					default: '112',
				},
				{
					type: 'textinput',
					id: 'secondIndex',
					label: 'Command Index',
					default: '0',
				}
			],
			callback: (action) => {

				if (self.xradioUDPManager !== undefined) {

					self.xradioUDPManager.HotKey_Press(action.options.index,action.options.secondIndex,action.options.id_end)
					
				}
				
			},
		},
		//----------------------------------------------------------------
		Start_Next: {
			name: 'Start Next',
			options: [
				{
					type: 'dropdown',
					id: 'id_end',
					label: 'Command End Character:',
					default: '\r',
					choices: CHOICES_END,
				}
			],
			callback: (action) => {

				if (self.xradioUDPManager !== undefined) {

					self.xradioUDPManager.StartNext(action.options.id_end)
					
				}
				
			},
		},
		//----------------------------------------------------------------
		Start_Spot: {
			name: 'Start Spot',
			options: [
				{
					type: 'dropdown',
					id: 'id_end',
					label: 'Command End Character:',
					default: '\r',
					choices: CHOICES_END,
				}
			],
			callback: (action) => {

				if (self.xradioUDPManager !== undefined) {

					self.xradioUDPManager.StartSpot(action.options.id_end)
					
				}
				
			},
		},
		//----------------------------------------------------------------
		Stop: {
			name: 'Stop',
			options: [
				{
					type: 'dropdown',
					id: 'id_end',
					label: 'Command End Character:',
					default: '\r',
					choices: CHOICES_END,
				}
			],
			callback: (action) => {

				if (self.xradioUDPManager !== undefined) {

					self.xradioUDPManager.Stop(action.options.id_end)
					
				}
				
			},
		},
		//----------------------------------------------------------------
		Auto_Man: {
			name: 'Auto Man',
			options: [
				{
					type: 'dropdown',
					id: 'id_end',
					label: 'Command End Character:',
					default: '\r',
					choices: CHOICES_END,
				}
			],
			callback: (action) => {

				if (self.xradioUDPManager !== undefined) {

					self.xradioUDPManager.AutoMan(action.options.id_end)
					
				}
				
			},
		},
		//----------------------------------------------------------------
		StartKeyB: {
			name: 'StartKeyB',
			options: [
				{
					type: 'dropdown',
					id: 'id_end',
					label: 'Command End Character:',
					default: '\r',
					choices: CHOICES_END,
				}
			],
			callback: (action) => {

				if (self.xradioUDPManager !== undefined) {

					self.xradioUDPManager.StartKeyB(action.options.id_end)
					
				}
				
			},
		},
		//----------------------------------------------------------------
		StopKeyB: {
			name: 'StopKeyB',
			options: [
				{
					type: 'dropdown',
					id: 'id_end',
					label: 'Command End Character:',
					default: '\r',
					choices: CHOICES_END,
				}
			],
			callback: (action) => {

				if (self.xradioUDPManager !== undefined) {

					self.xradioUDPManager.StopKeyB(action.options.id_end)
					
				}
				
			},
		},
		//----------------------------------------------------------------
	}
	

}
