---
title: Forms
sidebar_position: 3
---

Form fields in Mainsail are set up to be as hands-off as possible while still offering some internal help to keep you from having to wire up style markup.

### What Mainsail can do for your forms

-   Offers per-spec, pre-styled form inputs and field options (no styling necessary)
-   Assists with responsive layout (via AutoGrid)
-   Aims to include most accessibility roles and features out of the box (less wiring necessary)
-   Offers a clean wrapper `<FormControl/>` that will provide disabled/invalid state down to its children (less wiring necessary)

### What Mainsail doesn't do for you

-   Maintain form state
-   Control validation

## The Base Components

:::info
For deeper info on each, visit the various stories in Storybook for each Component.
:::

-   [FormControl](/components?path=/story/forms-formcontrol--basic-input) - the parent wrapper, provides `isInvalid` `isDisabled`, and more to children automatically; also supports AutoGrid features
-   [Checkbox](/components?path=/story/forms-checkbox--basic) - an individual checkbox with a text label
-   [CheckboxGroup](/components?path=/story/forms-checkboxgroup--basic) - a group of checkboxes (to be used inside a FormControl)
-   [Dropdown](/components?path=/story/forms-dropdown--basic) - a multiple choice dropdown
-   [FormHelpText](/components?path=/story/forms-formhelptext--primary) - the little helpful bits of text that sit neatly under an input
-   [FormInputIcon](/components?path=/story/forms-forminputicon--basic&args=isDisabled:false) - an icon that gets situated inside an `<Input/>` field with proper focus/disabled styling applied for you
-   [FormInputOptions](/components?path=/story/forms-forminputoptions--with-checkbox) - the parent wrapper
-   [FormLabel](/components?path=/story/forms-formlabel--basic) - the text that labels a field for visual and accessibility purposes (no wiring necessary when paired inside a FormControl)
-   [Button](/components?path=/story/forms-button--primary) - the ubiquitous button, also useful in forms
-   [Input](/components?path=/story/forms-input--primary) - the universal `<input/>` field, styled per spec and ready to gain the perks of FormControl
-   [DatePicker (Native)](/components?path=/story/forms-datepicker-native--basic) - an available styled NATIVE date picker - likely to be used in mobile situations, `react-datepicker` support inside FormControl exists as well
-   [Radio](/?path=/story/forms-radio--basic) - a simple radio button
-   [RadioGroup](/components?path=/story/forms-radiogroup--basic) - a group of simple radio buttons
-   [Textarea](/components?path=/story/forms-textarea--primary) - a section for multi-line input of text
-   [TimePicker](/components?path=/story/forms-timepicker--basic) - a pre-styled dropdown for picking times, can be provided a list of times

## Let's Layout Some Fields

It all starts with a `FormControl`.

This portion of your form field handles the following:

-   invalid state and style
-   invalid input errors
-   disabled state and style
-   readonly state and style
-   required state and style
-   automatically links ids between labels and inputs for accessibility

```jsx
<FormControl>
    <FormLabel text="Email" invalidText="You must provide a username" />
    <Input type="email" value="" />
    <FormInputIcon name="email" />
</FormControl>
```

Play around with a simple example here:

<iframe
    style={{ width: "100%", height: "500px" }}
    src="https://stackblitz.com/edit/mainsail-form-fields?embed=1&file=src/App.js&hideExplorer=1&hideNavigation=1"></iframe>

#### Adding invalid state

It's easy to add invalid state and error text to the entire field by supplying `isInvalid` and whatever `invalidText` is necessary.

Try adding `isInvalid` as a prop to `FormControl` component the editor above. (Tip: you don't need to actually supply a boolean, `isInvalid` is enough.)

#### Adding disabled state

It's easy to add invalid state and error text to the entire field by supplying `isDisabled`.

Try adding `isDisabled` as a prop to `FormControl` component the editor above. (Tip: you don't need to actually supply a boolean, `isDisabled` is enough.)

## Accessibility

You don't need to wire up your labels with your inputs when using `FormControl`. This is handled for you under the hood. You can see this by clicking the `FormLabel` in the stackblitz example above. Notice that the focus gets directed to the proper input (or inspect the elements to see something similar to this screenshot).

![Accessible automatically](https://user-images.githubusercontent.com/30707961/119859077-0b37ec00-bee3-11eb-80ec-0ddb00fa07dc.png)

## Columns and Layout

`<FormControl/>` pairs well with AutoGrid. And since [AutoGrid](/components?path=/story/react-guides-autogrid--page) is flexible enough to nest as needed. You can position and layout rows and columns in flexible ways that support automatic responsive behaviors with little effort.

The props `colSpan` is supported natively on the `FormControl` for use inside `AutoGrid`. This allows you it to declare its own number of columns that it should stretch across.

Alternatively, you could use parent AutoGrid components to control spanning and column handling.

In the stackblitz example above, we could just as easily take the parent `AutoGrid` and nest it inside something like this:

```jsx
<AutoGrid cols={12} className="w-full">
    ...
</AutoGrid>
```

This would provide a grid that offers 12 columns across the entire width of the page (parent). This, then affords you the ability to start specifying **where** you want to start the form to start on the horizontal axis with `colStart` and `colEnd` props on the parent.

See the [Advanced Grid Form demo](https://stackblitz.com/edit/mainsail-advanced-grid-form?embed=1&file=src/App.js&hideExplorer=1&hideNavigation=1&view=preview) for more details on this technique.
