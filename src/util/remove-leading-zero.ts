function removeLeadingZerosRegex(str: string) {
    return str.replace(/^0+(?=\d)/, '');
}

export { removeLeadingZerosRegex }