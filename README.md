# Tailwind CN

A wrapper around `tailwind-merge` and `clsx`

This utility function helps you to merge tailwind classes and override classes in the same category

Support string, object, array, and conditional syntax

## Usage

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
