# react-classy-component

A library to make it more convenient to create components using [Tailwind CSS](https://tailwindcss.com/).

## Install

```bash
yarn add react-classy-component
```

## Use

```ts
// Button.tsx
import { rcc } from "react-classy-component";

export const Button = rcc.button`bg-blue-500 text-white`;

// Somewhere else in your app
import { Button } from "./Button";

const Component = () => (
  <div>
    <Button>Click me!</Button>
  </div>
)
```
