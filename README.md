# Tailwind CN

A utility function built on top of [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) and [clsx](https://www.npmjs.com/package/clsx) to help you merge and override tailwind classes in the same category

Support string, object, array, and conditional syntax

## Installation

```bash
npm install tailwind-cn tailwind-merge clsx
```

## Usage

The API is exactly the same as `clsx`

```ts
import { cn } from 'tailwind-cn';

cn('text-white', true && 'text-blue');
// => 'text-blue'

cn(['p-4', undefined, 'text-black'], ['text-white']);
// => 'p-4 text-white'

cn({ 'bg-black': true, 'text-white': false });
// => 'bg-black

cn({ border: true }, 'border-0', ['border-b']);
// => 'border-0 border-b'

// Feel free to experiments :)
```

```tsx
import type { ComponentProps } from 'react';
import { cn } from 'tailwind-cn';

function Button({ className, ...props }: ComponentProps<'button'>) {
  const baseClasses = 'text-blue-700';
  const mergedClasses = cn(baseClasses, className);

  return <button className={mergedClasses} {...props} />;
}

function MyComponent() {
  const overrideClasses = cn('text-black', ['p-4', 'border'], { rounded: true });

  return (
    <>
      <Button>Default</Button>
      <Button className="text-red-700">Override</Button>
      <Button className={overrideClasses}>More Overrides</Button>
    </>
  );
}
```

## Acknowledgement

This lib is inspired by [ByteGrad](https://blog.bytegrad.com/) who showed me how I can combine these 2 libs and [Matt Pocock](https://www.mattpocock.com/) who has been providing great resources on learning Typescript
