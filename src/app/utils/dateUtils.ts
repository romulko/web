const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    timeZone: 'UTC'
});

export const dateFormat = (date: Date): string => {
    return dateTimeFormat.format(date);
};