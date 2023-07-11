# For Component for React

This package provides a utility component that simplifies the usage of .map() function in React. It allows you to iterate over an array of items and render a component for each item, with the flexibility of providing a fallback component in case the array is empty.

## Install

You can add this component to your project by simply copying the code above into a new `.tsx` file in your project. There are no additional dependencies needed.

## Usage

Here's an example of how to use the `For` component:

```jsx
import { For } from './For';

const fruits = ['Apple', 'Banana', 'Cherry'];

function App() {
  return (
    <For each={fruits} fallback={<div>No fruits found.</div>}>
      {(fruit, index) => (
        <div key={index}>{fruit}</div>
      )}
    </For>
  );
}

export default App;
```

In this example, the `For` component will render a `div` for each fruit in the `fruits` array. If the array were empty, it would render the "No fruits found." message.

## API

### Props

- `each` (required): An array of items to iterate over. Each item will be passed to the child function as an argument.
- `children` (required): A function that returns a JSX element. This function will be called once for each item in the `each` array, and it receives the current item and its index as arguments.
- `identifier` (optional): A string that will be used to generate a unique key for each child component. The key will be a concatenation of the identifier and the index. This prop is recommended when your `children` don't have stable keys.
- `fallback` (optional): A JSX Element that will be rendered in case the `each` array is empty.

## Why use this?

If you often find yourself mapping over arrays to render lists of components in React, this utility component can help you reduce boilerplate and keep your code cleaner and easier to read. It also handles edge cases like empty arrays and missing keys, so you don't have to worry about them.