const { test } = require('node:test');
const assert = require('node:assert');
const { add, subtract } = require('../src/calculator');

test('додавання двох чисел', () => {
    assert.strictEqual(add(2, 3), 5);
});

test('віднімання двох чисел', () => {
    assert.strictEqual(subtract(5, 3), 2);
});