import { describe, expect, it } from 'vitest';
import { cn } from '.';

describe('Test cn function', () => {
  it('Should return whatever string received', () => {
    expect(cn('text-white')).toBe('text-white');
  });

  it('Should return string of given array of string', () => {
    const classes = ['text-white', 'bg-black'];

    expect(cn(classes)).toBe('text-white bg-black');
  });

  it('Should return string of key of given object', () => {
    const classes = {
      'text-white': true,
    };

    expect(cn(classes)).toBe('text-white');
  });

  it('Should return string of given string, array of string, and key of given object', () => {
    const str = 'text-white';
    const array = ['bg-black'];
    const obj = {
      'p-4': true,
    };

    expect(cn(str, array, obj)).toBe('text-white bg-black p-4');
  });

  it('Should override classes in the same category', () => {
    const color = 'text-white';

    expect(cn(color, 'text-black')).toBe('text-black');
  });

  it('Should override with array too', () => {
    const classes = ['text-white', 'text-black'];

    expect(cn(classes)).toBe('text-black');
  });

  it('Should override with object too', () => {
    const classes = {
      'bg-white': true,
      'bg-black': true,
    };

    expect(cn(classes)).toBe('bg-black');
  });

  it('Should override with combined string, array, and object too', () => {
    const str = 'text-white';
    const arr = ['text-black', 'bg-white'];
    const obj = {
      'text-green': true,
      'bg-green': true,
    };

    expect(cn(str, arr, obj)).toBe('text-green bg-green');
  });

  it('Should ignore falsy values', () => {
    const str = '';
    const arr = ['', null, undefined, false];
    const obj = { 'text-white': false };

    expect(cn(str, arr, obj)).toBe('');
  });

  it('Should work with conditional operator', () => {
    expect(cn(true && 'text-white')).toBe('text-white');
  });
});
