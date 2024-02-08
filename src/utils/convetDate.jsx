export const ConvertDate = (utcDate) => {

    // Create a new Date object from the UTC timestamp
    const date = new Date(utcDate);
    // Format the date and time using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        year: 'numeric',
        month: 'numeric',
        timeZone: 'UTC', // Specify the UTC timezone
    }).format(date);
    return formattedDate;

}