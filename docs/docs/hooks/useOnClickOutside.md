# useOnClickOutside

This hook allows you to detect and handle clicks outside a desired dom element. (Adapted from [useHooks.com](https://usehooks.com/useOnClickOutside/))

Automatically removes listeners on unmount.

```jsx
useOnClickOutside(ref, (e) => {
    // Do something when user clicks outside ref element
});
```

| Argument | Type       | Default | Description                                                        |
| -------- | ---------- | ------- | ------------------------------------------------------------------ |
| ref      | `ref`      |         | A ref to a dom element that you want to track click events outside |
| callback | `function` |         | A callback that receives the handled click event                   |

## Example Usage

```jsx
import { useOnClickOutside } from "mainsail-ui";

function Menu(props) {
    // The ref that we track for the element which to detect outside clicks
    const menuRef = useRef(null);

    // Some state for our UI
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hook takes in menu ref and will invoke callback when click happens
    // outside of ref element
    useOnClickOutside(menuRef, () => {
        setIsMenuOpen(false);
    });

    return (
        <div>
            {isMenuOpen ? (
                <div ref={menuRef}>
                    <ul>
                        <li>
                            <a>Menu Choice 1</a>
                        </li>
                        <li>
                            <a>Menu Choice 2</a>
                        </li>
                        <li>
                            <a>Menu Choice 3</a>
                        </li>
                    </ul>
                </div>
            ) : (
                <button onClick={() => setIsMenuOpen(true)}>Open Menu</button>
            )}
        </div>
    );
}
```
