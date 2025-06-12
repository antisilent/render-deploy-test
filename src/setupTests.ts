import '@testing-library/jest-dom';

// Add TextEncoder polyfill
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock fetch globally with proper Response implementation
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'It works!' }),
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: new Headers(),
    redirected: false,
    type: 'basic',
    url: 'http://localhost:4000/api/status'
  } as Response)
);

// Mock console.error to keep test output clean
global.console.error = jest.fn();
