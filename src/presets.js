
import { combineRgb } from '@companion-module/base'

export function getPresetsDefinitions(self) {

	let presets = []

	//----------------------------------------------------------------
	// Action Buttons
	//----------------------------------------------------------------
    
    for (var i = 49; i <= 51; i++){

        presets['EME '+(i-48)] = {
            type: 'button',
            category: 'Actions',
            name: 'EME '+(i-48),
            style: {
                text: 'EME '+(i-48),
                size: '18',
                color: combineRgb(255,255,255),
                bgcolor: combineRgb(0,0,255)
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'HotKey_Press',
                            options: {
                                id_end:'\r',
                                index:i,
                                secondIndex:'4'
                            }
                        },
                    ],
                },
            ],
            feedbacks: [
                {},
            ],
        }
    }

    //----------------------------------------------------------------

    presets['Stop'] = {
        type: 'button',
        category: 'Actions',
        name: 'Stop',
        style: {
            text: 'STOP ',
            size: '18',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'Stop',
                        options: {
                            id_end:'\r',
                        }
                    },
                ],
            },
        ],
        feedbacks: [
            {},
        ],
    }

    //----------------------------------------------------------------

    presets['Auto_Man'] = {
        type: 'button',
        category: 'Actions',
        name: 'Auto Man',
        style: {
            text: 'AUTO MAN',
            size: '18',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,128,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'Auto_Man',
                        options: {
                            id_end:'\r',
                        }
                    },
                ],
            },
        ],
        feedbacks: [
            {},
        ],
    }

    //----------------------------------------------------------------

    presets['Start_Spot'] = {
        type: 'button',
        category: 'Actions',
        name: 'Start Spot',
        style: {
            text: 'START SPOT',
            size: '18',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(0,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'Start_Spot',
                        options: {
                            id_end:'\r',
                        }
                    },
                ],
            },
        ],
        feedbacks: [
            {},
        ],
    }

    //----------------------------------------------------------------

    presets['Start_Next'] = {
        type: 'button',
        category: 'Actions',
        name: 'Start_Next',
        style: {
            text: 'START',
            size: '18',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(0,153,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'Start_Next',
                        options: {
                            id_end:'\r',
                        }
                    },
                ],
            },
        ],
        feedbacks: [
            {},
        ],
    }

    //----------------------------------------------------------------

    presets['StartKeyB'] = {
        type: 'button',
        category: 'Actions',
        name: 'StartKeyB',
        style: {
            text: 'START KEYB',
            size: '18',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(0,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'StartKeyB',
                        options: {
                            id_end:'\r',
                        }
                    },
                ],
            },
        ],
        feedbacks: [
            {},
        ],
    }

    //----------------------------------------------------------------

    presets['StopKeyB'] = {
        type: 'button',
        category: 'Actions',
        name: 'StopKeyB',
        style: {
            text: 'STOP KEYB',
            size: '18',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(0,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'StopKeyB',
                        options: {
                            id_end:'\r',
                        }
                    },
                ],
            },
        ],
        feedbacks: [
            {},
        ],
    }


    //----------------------------------------------------------------
	// Hotkeys first Part
	//----------------------------------------------------------------

    for (var i = 112; i <= 123; i++){

        presets['HotKey '+''+(i-111)] = {
            type: 'button',
            category: 'Hotkeys',
            name: ''+(i-111),
            style: {
                text: ''+(i-111),
                size: '18',
                color: combineRgb(0,0,0),
                bgcolor: combineRgb(255,255,255)
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'HotKey_Press',
                            options: {
                                id_end:'\r',
                                index:i,
                                secondIndex:'0'
                            }
                        },
                    ],
                },
            ],
            feedbacks: [
                {},
            ],
        }
    }

    //----------------------------------------------------------------
	// Hotkeys second Part
	//----------------------------------------------------------------

    for (var i = 112; i <= 117; i++){

        presets['HotKey '+''+(i-99)] = {
            type: 'button',
            category: 'Hotkeys',
            name: ''+(i-99),
            style: {
                text: ''+(i-99),
                size: '18',
                color: combineRgb(0,0,0),
                bgcolor: combineRgb(255,255,255)
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'HotKey_Press',
                            options: {
                                id_end:'\r',
                                index:i,
                                secondIndex:'1'
                            }
                        },
                    ],
                },
            ],
            feedbacks: [
                {},
            ],
        }
    }

    //----------------------------------------------------------------

	return presets;
}
