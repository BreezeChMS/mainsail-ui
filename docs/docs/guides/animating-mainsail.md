---
title: Animating Things
sidebar_position: 1
---

Mainsail provides a couple components to aid in animating transitions for components.

## Transition

-   Uses [React Transition Group](https://reactcommunity.org/react-transition-group/) under the hood for easily customizable, css-based animations
-   Useful for enter and exit animations
-   Unmounts a component when animation is done (by default - is configurable)
-   Allows for animation lifecycle callbacks - call a function when things start or are finished!

```jsx
<Transition animation={"fade"} isActive={true} shouldAnimateOnMount>
    <div>Look ma, I fade in/out</div>
</Transition>
```

### How to get it moving

`isActive` is the prop that triggers the enter/exit animation to start.

## Switcher

### Why use `<Switcher/>`?

-   Automatically wraps any child element with `<Transition/>`
-   Directionally transitions between children (e.g. sliding Forwards/Backwards depending on direction of movement)
-   Easier state management with the included `useSwitcher` hook

### The `useSwitcher` Hook

This hook exists solely as a convenience to manage all the state needed for the Switcher component.

```jsx
import { Switcher, useSwitcher } from "mainsail-ui";

const {
    previousView,
    currentView,
    previousAnim,
    nextAnim,
    setView,
} = useSwitcher({
    // Just providing some initial config defaults to the hook
    currentView: 1, // starting view
    nextAnim: "fade-slide-left", // animation for moving to next item
    previousAnim: "fade-slide-right", // animation for moving to previous item
});

// Here's the actual switcher (taken from the Switcher Basic story)

// The parent of a Switcher needs to be position: relative,
// if you desire the switcher to take up the full width/height of the parent

// In this example, the parent is set to a width of 50% and full height of the viewport using Mainsail utility classes

<div className="relative w-1/2 h-screen">
    <Switcher
        currentView={currentView}
        previousView={previousView}
        previousAnim={previousAnim}
        nextAnim={nextAnim}>
        <div data-testid="view-1" className="p-20 w-full h-full bg-blue-light">
            <h3>View 1</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, ipsam. Itaque animi et odio? Cum, nihil officia.
                Sint, perspiciatis fugiat?
            </p>
        </div>
        <div data-testid="view-2" className="p-20 w-full h-full bg-red-light">
            <h3>View 2</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, ipsam. Itaque animi et odio? Cum, nihil officia.
                Sint, perspiciatis fugiat?
            </p>
        </div>
        <div data-testid="view-3" className="p-20 w-full h-full bg-green-light">
            <h3>View 3</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, ipsam. Itaque animi et odio? Cum, nihil officia.
                Sint, perspiciatis fugiat?
            </p>
        </div>
    </Switcher>
</div>;
```

After the setup above, `setView()` method returned from the `useSwitcher()` hook, is the only method needed to change views (with transitions!).

```jsx
// Will transition the view to the second child of Switcher
setView(2);
```

:::caution

-   Switcher will automatically try to take up all the available space of a `position: relative` parent (this can be overridden via sizing props or css)
-   The parent will need explicit dimensions of some kind (for example, a `min-height`).

:::

For more information, see the Animation Section in the Components sidebar.
