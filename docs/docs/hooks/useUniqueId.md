# useUniqueId

This hook helps auto-generate a unique id (incremented integer) for client-side component rendering — useful for facilitating WAI-ARIA.

:::caution
Use this only for client-side use cases where you need a unique identifier for elements with pairing attributes.
See [this writeup by reach ui ](https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx) on this technique and its shortcomings.
:::

```jsx
// Useful for dynamically generated fields/components
const fieldId = useUniqueId("field"); // auto increments field1, field2
```

| Argument | Type     | Default | Description                                                                   |
| -------- | -------- | ------- | ----------------------------------------------------------------------------- |
| prefix   | `string` | ""      | A string that prefixes the number eg. `field` will result in `field1, field2` |

## Example Usage

```jsx
import { useUniqueId } from "mainsail-ui";

function dynamicInput(props) {
    const id = useUniqueId("input");

    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type={props.type} name={props.name} id={id} />
        </div>
    );
}
```
