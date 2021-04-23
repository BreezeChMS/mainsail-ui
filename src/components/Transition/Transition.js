import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { CSSTransition } from "react-transition-group";

import "./Transition.scss";

export const animations = {
    fade: "fade",
    fadeScale: "fade-scale",
    fadeSlideDown: "fade-slide-down",
};

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {
    animations,
};

/**
 * Animate components during mount/unmount
 * - Is a wrapper around [React-transition-group](https://reactcommunity.org/react-transition-group/css-transition)
 **/
export const Transition = ({
    isActive,
    children,
    className,
    animation,
    shouldUnmount,
    timeout,
    onExited,
    onEntered,
    ...props
}) => {
    return (
        <CSSTransition
            in={isActive}
            timeout={timeout}
            onEntered={onEntered}
            onExited={onExited}
            unmountOnExit={shouldUnmount}
            classNames={classify(className ? className : `ms-${animation}`)}
            {...props}>
            {children}
        </CSSTransition>
    );
};

Transition.propTypes = {
    /** Unmounts the component on finish */
    shouldUnmount: PropTypes.bool,
    /** Triggers the animation to begin */
    isActive: PropTypes.bool,
    /** Pre-built animation animation */
    animation: PropTypes.oneOf(Object.values(animations)),
    /** Custom animation class to add to transition component, see [React Transition Group Docs](http://reactcommunity.org/react-transition-group/css-transition) */
    className: PropTypes.string,
    /** Amount of time it takes to complete the transition programmatically (not animation speed) */
    timeout: PropTypes.number,
    /** Callback that fires on animation start */
    onEntered: PropTypes.func,
    /** Callback that fires on animation finish */
    onExited: PropTypes.func,
};

Transition.defaultProps = {
    shouldUnmount: true,
    animation: animations.fade,
    timeout: 300,
};

Transition.animations = animations;
