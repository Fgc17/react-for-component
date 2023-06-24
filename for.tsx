import { Fragment } from "react";

interface ForProps<T> {
  each: T[];
  children: (item: T, index?: number) => JSX.Element;
  identifier?: string;
  fallback?: JSX.Element;
}

export default function For<T>({ each, children, identifier, fallback }: ForProps<T>) {
  if (!each[0]) return fallback;

  return each.map((element, index) => {
    if (!identifier) return children(element, index);

    return <Fragment key={identifier + index}>{children(element)}</Fragment>;
  });
}

export { For };
