export const getFlexJustify = (value: "start" | "center" | "end") => {
    switch (value) {
        case "start":
            return "flex-start"
        case "end":
            return "flex-end"
        default:
            return "start"
    }
}