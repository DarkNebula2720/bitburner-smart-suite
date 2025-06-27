/** 
 * Lightweight runtime state manager 
 * Stores and retrieves in-memory game data, flags, and shared variables 
 */

let state = {};

export function get(key) {
    return state[key];
}

export function set(key, value) {
    state[key] = value;
}

export function has(key) {
    return Object.prototype.hasOwnProperty.call(state, key);
}

export function remove(key) {
    delete state[key];
}

export function reset() {
    state = {};
}

export function all() {
    return { ...state };
}

