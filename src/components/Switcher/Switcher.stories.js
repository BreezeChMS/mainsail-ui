import React, { useState } from "react";
import {
    Button,
    Transition,
    FormControl,
    FormLabel,
    Input,
} from "components/core";
import { Switcher, useSwitcher } from "./Switcher";

export default {
    title: "Animation/Switcher",
    component: Switcher,
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: `A component that wraps children in a Transition and intelligently handles next/previous animations. Intended to utilize **useSwitcher** hook for convenient state management.
                \n- **Note:** width and height of Switcher is intended to be explictly defined since child views are absolutely positioned in Switcher. You will likely need to define a height of your tallest child to maintain uniformity between transitions.
                \n- Can utilize any available Transition.animation (or [custom](./?path=/story/animation-transition--custom)) for the forward/backwards animations.
                \n- \`useSwitcher\` is available to add a layer of convenience to handling multiple state objects in a single hook. See this [live example on Stackblitz.](https://stackblitz.com/edit/react-view-transitioner?file=src/App.js)
                \n- IMPORTANT: To maintain view referential integrity between renders (for consistent state), either define your Switcher view markup inside the Switcher component itself or define external view components outside of the parent component see the story source code.
                `,
            },
        },
    },
};

const View1 = (
    { value, onChange } // eslint-disable-line
) => (
    <div data-testid="view-1" className="p-20 w-full h-full bg-blue-light">
        <h3>View 1</h3>
        <p className="mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ipsam. Itaque animi et odio? Cum, nihil officia. Sint, perspiciatis
            fugiat?
        </p>
        <FormControl>
            <FormLabel text="Test Input" />
            <Input key="input1" onChange={onChange} value={value} />
        </FormControl>
    </div>
);

const View2 = () => (
    <div data-testid="view-2" className="p-20 w-full h-full bg-red-light">
        <h3>View 2</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ipsam. Itaque animi et odio? Cum, nihil officia. Sint, perspiciatis
            fugiat?
        </p>
    </div>
);

const View3 = () => (
    <div data-testid="view-3" className="p-20 w-full h-full bg-green-light">
        <h3>View 3</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ipsam. Itaque animi et odio? Cum, nihil officia. Sint, perspiciatis
            fugiat?
        </p>
    </div>
);

const View4 = () => (
    <div data-testid="view-4" className="p-20 w-full h-full bg-violet-light">
        <h3>View 4</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ipsam. Itaque animi et odio? Cum, nihil officia. Sint, perspiciatis
            fugiat?
        </p>
    </div>
);

const Template = (args) => {
    const [text, setText] = useState("");

    const {
        previousView,
        currentView,
        previousAnim,
        nextAnim,
        setView,
    } = useSwitcher({
        currentView: args.currentView,
        nextAnim: args.nextAnim,
        previousAnim: args.previousAnim,
    });
    return (
        <>
            <div className="mb-12 space-x-12">
                <Button className="px-20" text="1" onClick={() => setView(1)} />
                <Button className="px-20" text="2" onClick={() => setView(2)} />
                <Button className="px-20" text="3" onClick={() => setView(3)} />
                <Button className="px-20" text="4" onClick={() => setView(4)} />
            </div>
            <p>
                The Switcher will (by default) be set to{" "}
                <code>position:absolute</code> and take up the full width and
                height of its <code>position:relative</code> parent.
            </p>
            <div className="relative w-1/2 h-screen">
                <Switcher
                    currentView={currentView}
                    previousView={previousView}
                    previousAnim={previousAnim}
                    nextAnim={nextAnim}
                    {...args}>
                    <View1
                        key="view1"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <View2 key="view2" value={text} />
                    <View3 key="view3" value={text} />
                    <View4 key="view4" value={text} />
                </Switcher>
            </div>
        </>
    );
};

export const Basic = Template.bind({});
Basic.args = {
    nextAnim: "fade-slide-left",
    previousAnim: "fade-slide-right",
};

export const ChangeHandlers = Template.bind({});
ChangeHandlers.args = {
    width: "640px",
    height: "300px",
    nextAnim: "fade-slide-up",
    previousAnim: "fade-slide-down",
};

Switcher.animations = Transition.animations;
