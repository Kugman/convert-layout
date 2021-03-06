var convert = require('./convert');

var map = {
    'q':  'q',
    'w':  'w',
    'e':  'e',
    'r':  'r',
    't':  't',
    'y':  'y',
    'u':  'u',
    'i':  'i',
    'o':  'o',
    'p':  'p',
    '[':  '`',
    '{':  '^',
    ']':  '+',
    '}':  '*',
    '\\': 'ç',
    '|':  'Ç',
    'a':  'a',
    's':  's',
    'd':  'd',
    'f':  'f',
    'g':  'g',
    'h':  'h',
    'j':  'j',
    'k':  'k',
    'l':  'l',
    ';':  'ñ',
    ':':  'Ñ',
    "'":  '´',
    '"':  '¨',
    'z':  'y',
    'x':  'x',
    'c':  'c',
    'v':  'v',
    'b':  'b',
    'n':  'n',
    'm':  'm',
    ',':  ',',
    '<':  ';',
    '.':  '.',
    '>':  ':',
    '/':  '-',
    '?':  '_',
    '!':  '!',
    '@':  '"',
    '#':  '·',
    '$':  '$',
    '%':  '%',
    '&':  '&',
    '*':  '(',
    '(':  ')',
    ')':  '=',
    '-':  "'",
    '_':  '?',
    '=':  '¡',
    '+':  '¿'
};

module.exports = convert(map);
