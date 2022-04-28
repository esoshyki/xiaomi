import { Aligns, Justifies } from "../components/types"

export const getFlexJustify = (value: Justifies) => {
    switch (value) {
        case "start":
            return "flex-start"
        case "end":
            return "flex-end"
        case "around":
            return "space-around"
        case "between":
            return "space-between"
        default:
            return "center"
    }
}

export const getFlexAligns = (value: Aligns) => {
    switch (value) {
        case "start":
            return "flex-start"
        case "end":
            return "flex-end"
        case "stretch":
            return "stretch"
        default:
            return "center"
    }   
}