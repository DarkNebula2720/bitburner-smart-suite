export function assertEqual(actual, expected, label) {
    if (actual !== expected)
        throw new Error(`[FAIL] ${label}: ${actual} !== ${expected}`);
    return `[PASS] ${label}`;
}

