import { Splice , Run, Relog } from "../models";

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
        start: 1000,
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
        start: 5500,
        stop: 6000

    }
];