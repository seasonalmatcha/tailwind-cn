import { describe, expect, it } from 'vitest';
import { hello } from '.';

describe('Test', () => {
  it('Should return "Hello world!"', () => {
    expect(hello()).toBe('Hello world!');
  });
});
