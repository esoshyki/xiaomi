interface HeadProps {
    pageTitle: string
    content?: string
}

const Head = (props: HeadProps) => {

    return (
        <head>
            <title>{props.pageTitle}</title>
            <meta content={props.content ?? "text/html; charset=utf-8"} />
        </head>
    )
}

export default Head