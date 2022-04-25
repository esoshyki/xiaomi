export type Colors = {
    background: {
        contrast: string
        opacity: string
        default: string
        first: string
        second: string
    }
    accent: {
        default: string
        hover: string
        pressed: string
    }
    link: {
        contrast: string
        default: string
        hover: string
        pressed: string
        visited: string
    }
    button: {
        contrast: string
        default: string
        hover: string
        pressed: string
        disable: string
    }
    text: {
        contrast: string
        default: string
        secondary: string
        tertiary: string
    }
    icon: {
        contrast: string
        default: string
        secondary: string
    }
    statusBar: {
        contrast: string
        default: string
    }
    info: {
        error: string
        success: string
    }
}

export const colors : Colors = {
    background: {
        contrast: "#fff",
        opacity: "rgba(255, 255, 255, 0.6);",
        default: "#EDEFE4",
        first: "#D3E5D4",
        second: "#D3E5E3"
    },
    accent: {
        default: "#78C25E",
        hover: "#60B243",
        pressed: "#509438"
    },
    link: {
        contrast: "#fff",
        default: "#71B659",
        hover: "#609F46",
        pressed: "#4F833A",
        visited: "#71B659"
    },
    button: {
        contrast: "#fff",
        default: "#78C25E",
        hover: "#60B243",
        pressed: "#509438",
        disable: "#C7C9C7"
    },
    text: {
        contrast: "#fff",
        default: "#464646",
        secondary: "#7A7A7A",
        tertiary: "#8F8F8F"
    },
    icon: {
        contrast: "#fff",
        default: "#464646",
        secondary: "#7A7A7A"
    },
    statusBar: {
        contrast: "#fff",
        default: "#78C25E",
    },
    info: {
        error: "#E7372D",
        success: "#78C25E"
    }
}

