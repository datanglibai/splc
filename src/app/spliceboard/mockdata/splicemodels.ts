import { SpliceModel } from "../models";

export const spliceModels: SpliceModel[] = [
    {
        name: "splice 1",
        fragments:
            [
                {
                    id: "1",
                    start: 3000,
                    stop: 3500
                },
                {
                    id: "2",
                    start: 4000,
                    stop: 4700
                }]
    },
    {
        name: "splice 2",
        fragments: [
            {
                id: "1",
                start: 2300,
                stop: 3100
            }
        ]
    }
];