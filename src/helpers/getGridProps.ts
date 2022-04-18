import { Aligns, Justifies } from "../components/types"

export const getGridJustify = (value: Justifies) => {
    switch (value) {
        case "around":
            return "space-around"
        case "between":
            return "space-between"
        default:
            return value
    }
}

export const getGridAligns = (value: Aligns) => {
    switch (value) {
        case "start":
            return "start"
        case "end":
            return "end"
        default:
            return "start"
    }   
}