export const toFormData = (obj: Record<any, any>, form?: FormData, nameSpace?: string) => {
    const fd = form || new FormData()
    let formKey

    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (nameSpace) {
                formKey = nameSpace + `[${property}]`
            } else {
                formKey = property
            }

            if (obj?.[property]?.file && obj?.[property]?.name) {
                fd.append(formKey, obj[property].file, obj[property].name)
            } else {
                if (obj[property] instanceof Date) {
                    fd.append(formKey, obj[property].toISOString())
                } else if (
                    typeof obj[property] === 'object' &&
                    obj[property] !== null &&
                    !(obj[property] instanceof File)
                ) {
                    toFormData(obj[property], fd, formKey)
                } else {
                    fd.append(formKey, obj[property] === null ? '' : obj[property])
                }
            }
        }
    }
    return fd
}

