export const formatDate = (date: Date) => {
    const format = (n: number) => n >= 10 ? `${n}` : "0" + n;

    const years = format(date.getFullYear()).slice(-2);
    const month = format(date.getMonth());
    const day = format(date.getDate());
    const hours = format(date.getHours());
    const minutes = format(date.getMinutes());

    return `${hours}:${minutes} ${day}/${month}/${years}`
}