import { Splice, Run, Relog, ViewChannelData, FocusedRunRelogs } from "../models";

export const splices: Splice[] = [
    {
        name: "splice 1",
        fragments:
            [
                {
                    id: "1",
                    start: 3000,
                    stop: 3300
                },
                {
                    id: "2",
                    start: 3400,
                    stop: 3800
                }]
    },
    {
        name: "splice 2",
        fragments: [
            {
                id: "1",
                start: 5800,
                stop: 6000
            }
        ]
    }
];

export const runs: Run[] = [
    {
        name: "Run1",
        type: "Run",
        start: 2000,
        stop: 4000
    },
    {
        name: "Run2",
        type: "Run",
        start: 4000,
        stop: 6000

    }]

export const relogs: Relog[] = [
    {
        name: "Relog1",
        type: "Relog",
        start: 3000,
        stop: 3950
    },
    {
        name: "Relog2",
        type: "Relog",
        start: 5000,
        stop: 5950

    }
];


export const runData: ViewChannelData = {
    mnemonic: 'run1',
    indexes: [2000, 2050, 2100, 2150, 2200, 2250, 2300, 2350, 2400, 2450, 2500, 2550, 2600, 2650, 2700, 2750, 2800, 2850, 2900, 2950, 3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850, 3900, 3950, 4000, 4050, 4100, 4150, 4200, 4250, 4300, 4350, 4400, 4450, 4500, 4550, 4600, 4650, 4700, 4750, 4800, 4850, 4900, 4950, 5000, 5050, 5100, 5150, 5200, 5250, 5300, 5350, 5400, 5450, 5500, 5550, 5600, 5650, 5700, 5750, 5800, 5850, 5900, 5950, 6000],
    values: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
}

export const relog1Data: ViewChannelData = {
    mnemonic: "relog1",
    indexes: [3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850, 3900, 3950],
    values: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

}

export const relog2Data: ViewChannelData = {
    mnemonic: "relog1",
    indexes: [5000, 5050, 5100, 5150, 5200, 5250, 5300, 5350, 5400, 5450, 5500, 5550, 5600, 5650, 5700, 5750, 5800, 5850, 5900, 5950],
    values: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
}

export const focusedRunRelogs: FocusedRunRelogs = {
    runRelogs:[{
        name: "Run1",
        type: "Run",
        start: 2000,
        stop: 4000
    },{
        name: "Relog1",
        type: "Relog",
        start: 3000,
        stop: 3950
    }],
    totalRange: {start:3000, stop:3950}
}









