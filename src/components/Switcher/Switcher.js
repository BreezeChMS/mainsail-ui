import React, { useState } from "react";
import PropTypes from "prop-types";
import { Transition } from "components/Transition";
import { classify } from "utility/classify";

export const useSwitcher = (config = {}) => {
    const [currentView, setCurrentView] = useState(1);
    const [prevView, setPrevView] = useState(1);
    const [nextAnim, setNextAnim] = useState(config.nextAnim || "fade");
    const [previousAnim, setPreviousAnim] = useState(
        config.previousAnim || "fade"
    );

    const setView = (view) => {
        setPrevView(currentView);
        setCurrentView(view);
    };

    return {
        setView,
        currentView,
        previousView: prevView,
        nextAnim,
        previousAnim,
        setNextAnim,
        setPreviousAnim,
    };
};

/**
 * A component that wraps children in a Transition and intelligently handles next/previous animations. Intended to utilize useSwitcher hook for convenient state
 **/
export const Switcher = ({
    children,
    className,
    classNameChildren,
    isOverflowHidden,
    isOverflowHiddenX,
    isOverflowHiddenY,
    shouldUnmount,
    width,
    minWidth,
    height,
    minHeight,
    currentView,
    previousView,
    previousAnim,
    nextAnim,
    onChangeBefore,
    onChangeAfter,
}) => {
    return (
        <div
            className={classify(
                "mainsail-switcher",
                isOverflowHidden && "overflow-hidden",
                isOverflowHiddenX && "overflow-hidden-x",
                isOverflowHiddenY && "overflow-hidden-y",
                className
            )}
            style={{ width, height, minWidth, minHeight }}>
            {children.map((item, idx) => {
                let isActive = currentView === idx + 1;
                let anim = nextAnim;

                if (previousView < currentView) {
                    anim = idx + 2 === currentView ? previousAnim : nextAnim;
                }

                if (previousView > currentView) {
                    anim = idx + 1 > currentView ? nextAnim : previousAnim;
                }

                return (
                    <Transition
                        shouldUnmount={shouldUnmount}
                        key={item.key || idx}
                        animation={anim}
                        isActive={isActive}
                        onEntered={onChangeBefore}
                        onExited={onChangeAfter}>
                        <div
                            className={classify(
                                "mainsail-switcher__child absolute w-full h-full",
                                classNameChildren
                            )}>
                            {item}
                        </div>
                    </Transition>
                );
            })}
        </div>
    );
};

Switcher.propTypes = {
    /** (Optional Override) Width of transitionable view */
    width: PropTypes.string,
    /** (Optional Override) Height of transitionable view */
    height: PropTypes.string,
    /** (Optional Override) Minimum Width of transitionable view */
    minWidth: PropTypes.string,
    /** (Optional Override) Minimum Height of transitionable view */
    minHeight: PropTypes.string,
    /** (Optional Override) Integer of currently viewed child (First view = 1) */
    currentView: PropTypes.number,
    /** (Optional) Integer of previously viewed child, required if animations of prev/next are different */
    previousView: PropTypes.number,
    /** Transitiona animation name (either value of Transition.animations or a custom css class [see custom animation info](./?path=/story/animation-transition--custom)) */
    previousAnim: PropTypes.string,
    /** Transitiona animation name (either value of Transition.animations or a custom css class [see custom animation info](./?path=/story/animation-transition--custom)) */
    nextAnim: PropTypes.string,
    /** Set whether the child transitionable elements should unmount after transition has finished */
    shouldUnmount: PropTypes.bool,
    /** Set the parent wrapper to have overflow hidden. (Warning: May show scrollbars during transition without) */
    isOverflowHidden: PropTypes.bool,
    /** Set the parent wrapper to have overflow hidden. (Warning: May show scrollbars during transition without) */
    isOverflowHiddenX: PropTypes.bool,
    /** Set the parent wrapper to have overflow hidden. (Warning: May show scrollbars during transition without) */
    isOverflowHiddenY: PropTypes.bool,
    /** (Optional) callback to fire on a transition change (before animation) */
    onChangeBefore: PropTypes.func,
    /** (Optional) callback to fire after a transition change (after animation) */
    onChangeAfter: PropTypes.func,
    /** Style class to add to all Switcher Children */
    classNameChildren: PropTypes.string,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Switcher.defaultProps = {
    isOverflowHidden: false,
    isOverflowXHidden: true,
    isOverflowYHidden: false,
    shouldUnmount: true,
    width: "100%",
    height: "auto",
};

Switcher.animations = Transition.animations;
