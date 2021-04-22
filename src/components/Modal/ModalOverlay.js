import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Modal.scss";

/**
 * A Modal subcomponent that provides the overlay behind the modal
 **/
export const ModalOverlay = ({ className, isOpen, ...props }) => {
    if (!isOpen) {
        return;
    }

    return (
        <div
            className={classify("mainsail-modal-overlay", className)}
            {...props}></div>
    );
};

ModalOverlay.propTypes = {
    /** Style class to add to Icon wrapper */
    className: PropTypes.string,
    /** Controls the visibility of the modal overlay */
    isOpen: PropTypes.bool,
};

ModalOverlay.defaultProps = {};
