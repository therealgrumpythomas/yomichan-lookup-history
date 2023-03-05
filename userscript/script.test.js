/**
 * @jest-environment jsdom
 */

const script = require('./script');

test('should work', () => {
    expect(true).toBeTruthy();
});

test('containsJapanese: not contains', () => {
    const notCases = [
        null,
        undefined,
        '',
        'hello',
        'test123'
    ];
    notCases.forEach((c) => expect(script.containsJapanese(c)).toBeFalsy());
});

test('containsJapanese: do contains', () => {
    const notCases = [
        'こんにちは世界',
        'パソコン',
        'hello世界',
        '僕は学生ですよ'
    ];
    notCases.forEach((c) => expect(script.containsJapanese(c)).toBeTruthy());
});