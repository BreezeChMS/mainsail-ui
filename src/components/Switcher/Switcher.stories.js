import React from "react";
import { Button, Transition } from "components/core";
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
             `,
            },
        },
    },
};

const Template = (args) => {
    const {
        previousView,
        currentView,
        previousAnim,
        nextAnim,
        setView,
    } = useSwitcher({
        nextAnim: args.nextAnim, // 'fade-slide-left',
        previousAnim: args.previousAnim, // 'fade-slide-right'
    });
    return (
        <>
            <div className="mb-12 space-x-12">
                <Button className="px-20" text="1" onClick={() => setView(1)} />
                <Button className="px-20" text="2" onClick={() => setView(2)} />
                <Button className="px-20" text="3" onClick={() => setView(3)} />
                <Button className="px-20" text="4" onClick={() => setView(4)} />
            </div>
            <Switcher
                currentView={currentView}
                previousView={previousView}
                previousAnim={previousAnim}
                nextAnim={nextAnim}
                {...args}>
                <div data-testid="view-1" className="p-48 bg-blue-light">
                    <h3>View 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, ipsam. Itaque animi et odio? Cum, nihil
                        officia. Sint, perspiciatis fugiat?
                    </p>
                </div>
                <div data-testid="view-2" className="p-48 bg-red-light">
                    <h3>View 2</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, ipsam. Itaque animi et odio? Cum, nihil
                        officia. Sint, perspiciatis fugiat?
                    </p>
                </div>
                <div data-testid="view-3" className="p-48 bg-green-light">
                    <h3>View 3</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, ipsam. Itaque animi et odio? Cum, nihil
                        officia. Sint, perspiciatis fugiat?
                    </p>
                </div>
                <div data-testid="view-4" className="p-48 bg-violet-light">
                    <h3>View 4</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, ipsam. Itaque animi et odio? Cum, nihil
                        officia. Sint, perspiciatis fugiat?
                    </p>
                </div>
            </Switcher>
        </>
    );
};

export const Basic = Template.bind({});
Basic.args = {
    width: "640px",
    height: "640px",
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
