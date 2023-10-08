export function checkFileExtension(path: string, expectedExtension: string[]) {
    const parts = path.split('.');
    const extension = parts[parts.length - 1];

    if (!expectedExtension.includes(extension)) {
        throw new Error('File extension should be: ' + expectedExtension.join(' '));
    }
}
