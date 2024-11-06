export function generateUUID(): string {
    // Получаем случайное число в диапазоне от 0 до 255
    function getRandomByte(): number {
        return Math.floor(Math.random() * 256);
    }

    // Преобразуем число в шестнадцатеричную строку и добавляем ведущий ноль, если необходимо
    function byteToHex(byte: number): string {
        return ('0' + byte.toString(16)).slice(-2);
    }

    // Генерируем случайные байты для UUID
    const bytes = new Uint8Array(16);
    for (let i = 0; i < 16; i++) {
        bytes[i] = getRandomByte();
    }

    // Устанавливаем версию UUID (4) и вариант (2)
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // Версия 4
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // Вариант 2

    // Преобразуем байты в шестнадцатеричную строку
    const hex = Array.from(bytes, byteToHex).join('');

    // Форматируем строку в вид UUID
    return [
        hex.slice(0, 8),
        hex.slice(8, 12),
        hex.slice(12, 16),
        hex.slice(16, 20),
        hex.slice(20, 32)
    ].join('-');
}

