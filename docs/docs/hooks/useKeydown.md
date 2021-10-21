# useKeydown

This hook handles detecting `keydown` events and facilitates the cleanup of their listeners after unmounting.

```jsx
// Detect a key is down and do things
useKeydown((e) => {
    // do stuff
});
```

| Argument     | Type       | Default | Description                                                           |
| ------------ | ---------- | ------- | --------------------------------------------------------------------- |
| callback     | `function` |         | A callback that receives the keydown event                            |
| dependencies | `array`    | `[]`    | A (optional) dependency array to init a new reference to the callback |

:::info
If you desire the reference to the callback to never change across renders, consider wrapping your callback in `useCallback`
:::

## Example Usage

```jsx
import { useKeydown } from "mainsail-ui";

const ESC_KEY_CODE = 27;

function SomeComponent(props) {
    const [isOpen, setIsOpen] = useState();

    useKeydown(
        (e) => {
            if (e.charCode === ESC_KEY_CODE || e.keyCode === ESC_KEY_CODE) {
                handleDismiss();
            }
        },
        [isOpen]
    );

    const handleDismiss = () => {
        // close all the things
    };

   ...
}
```
