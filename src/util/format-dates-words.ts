import dayjs from 'dayjs';

/**
 * Formats a date string into words (e.g. "February 15, 2024")
 * @param dateString - The date string to format
 * @returns Formatted date in words
 */
export function formatDateToWords(dateString: string): string {
    // Handle DD-MM-YYYY format by converting to YYYY-MM-DD
    const parts = dateString.split('-');
    if (parts.length === 3) {
        // Rearrange from DD-MM-YYYY to YYYY-MM-DD
        dateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dayjs(dateString).format('D MMMM, YYYY');
}
