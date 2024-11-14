/**
 * Formats a number into Nigerian Naira currency format
 * @param amount - The number to format
 * @returns Formatted currency string with ₦ symbol and thousands separators
 */
export function formatNaira(amount: number): string {
    return `₦${amount.toLocaleString('en-NG')}`;
}
