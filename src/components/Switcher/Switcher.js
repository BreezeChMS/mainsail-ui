import React, { useState } from "react";
import PropTypes from "prop-types";
import { Transition } from "components/Transition";
import { classify } from "utility/classify";

import "./Switcher.scss";

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
    isOverflowHidden,
    shouldUnmount,
    width,
    height,
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
                "mainsail-switcher relative",
                isOverflowHidden && " overflow-hidden",
                className
            )}
            style={{ width, height }}>
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
                        key={idx}
                        animation={anim}
                        isActive={isActive}
                        onEntered={onChangeBefore}
                        onExited={onChangeAfter}>
                        <div className="absolute w-full h-full">{item}</div>
                    </Transition>
                );
            })}
        </div>
    );
};

Switcher.propTypes = {
    /** Width of transitionable view */
    width: PropTypes.string,
    /** Height of transitionable view */
    height: PropTypes.string,
    /** Integer of currently viewed child (First view = 1) */
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
    /** (Optional) callback to fire on a transition change (before animation) */
    onChangeBefore: PropTypes.func,
    /** (Optional) callback to fire after a transition change (after animation) */
    onChangeAfter: PropTypes.func,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Switcher.defaultProps = {
    isOverflowHidden: true,
    shouldUnmount: true,
    width: "100%",
    height: "auto",
};

/*
 * Tip: Be sure to attach any prop enums separately for convenience
 * use the plural form of the prop name
 * Switcher.variants = variants
 */
