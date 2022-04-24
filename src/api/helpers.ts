export const collectFormData = (data: object) : FormData => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => {
        formData.set(key, val)
    });

    return formData
}