import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { classify } from "utility/classify";

/**
 * A styled search input with icons and support for clearing search terms (native props passed to input)
 **/
export const SearchInput = forwardRef(
    (
        {
            icon,
            isDisabled,
            hasClearButton,
            onClear,
            onChange,
            className,
            ...props
        },
        ref
    ) => {
        const [term, setTerm] = useState("");

        const handleClear = () => {
            setTerm("");

            if (typeof onClear === "function") {
                onClear();
            }
        };

        const handleChange = (e) => {
            setTerm(e.target.value);

            if (typeof onChange === "function") {
                onChange(e);
            }
        };

        return (
            <div
                data-testid="search-input"
                className={classify("mainsail-search-input w-full", className)}>
                <input
                    ref={ref}
                    className="mainsail-search-input__input"
                    disabled={isDisabled}
                    value={term}
                    onChange={handleChange}
                    {...props}
                />
                <Icon className="input-icon" name={icon} />
                {hasClearButton && term ? (
                    <Button
                        className="clear-button"
                        variant="icon"
                        icon="close"
                        iconSize="md"
                        onClick={handleClear}
                    />
                ) : null}
            </div>
        );
    }
);

SearchInput.propTypes = {
    /** Disables input field  */
    isDisabled: PropTypes.bool,
    /** (Optional) click handler to call when search input is cleared */
    onClear: PropTypes.func,
    /** Change handler to call when search input is typed in (Warning: does not provide its own debouncing) */
    onChange: PropTypes.func.isRequired,
    /** Icon name for input icon (defaults to search) */
    icon: PropTypes.string,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Whether or not to show the clear button */
    hasClearButton: PropTypes.bool,
};

SearchInput.defaultProps = {
    icon: "search",
    hasClearButton: false,
};

SearchInput.displayName = "SearchInput";
