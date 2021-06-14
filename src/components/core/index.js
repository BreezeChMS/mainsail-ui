// Components Global Export for plopjs
export { Switcher } from "../Switcher";
export { FormInputIcon } from "../FormInputIcon";
export { NativeDatePicker } from "../NativeDatePicker";
export { TimePicker } from "../TimePicker";
export { PopMenu, PopMenuItem } from "../PopMenu";
export { Table, Column, Actions } from "../Table";
export { Dropdown } from "../Dropdown";
export { ListGroup, ListGroupItem } from "../ListGroup";
export { FormInputOptions } from "../FormInputOptions";
export { Flex, FlexCol, FlexRow } from "../Flex";
export { FormHelpText } from "../FormHelpText";
export { AutoGrid, AutoGridItem } from "../AutoGrid";
export { Textarea } from "../Textarea";
export { FormLabel } from "../FormLabel";
export { FormControl } from "../FormControl";
export { Input } from "../Input";
export { Transition } from "../Transition";
export { Modal } from "../Modal";
export { Tooltip } from "../Tooltip";
export { Checkbox, CheckboxGroup } from "../Checkbox";
export { Radio, RadioGroup } from "../Radio";
export { Badge } from "../Badge";
export { Spinner } from "../Spinner";
export { Button } from "../Button";
export { Icon } from "../Icon";

// Export all our useful react hooks
export * from "../../utility/hooks";

// ENUM Import for plopjs
import { ENUMS as AutoGridENUMS } from "../AutoGrid";
import { ENUMS as TextareaENUMS } from "../Textarea";
import { ENUMS as FormLabelENUMS } from "../FormLabel";
import { ENUMS as InputENUMS } from "../Input";
import { ENUMS as TransitionENUMS } from "../Transition";
import { ENUMS as ModalENUMS } from "../Modal";
import { ENUMS as TooltipENUMS } from "../Tooltip";
import { ENUMS as CheckboxENUMS } from "../Checkbox";
import { ENUMS as RadioENUMS } from "../Radio";
import { ENUMS as BadgeENUMS } from "../Badge";
import { ENUMS as SpinnerENUMS } from "../Spinner";
import { ENUMS as ButtonENUMS } from "../Button";
import { ENUMS as IconENUMS } from "../Icon";

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
// ENUM Export for plopjs
export const ENUMS = {
    AutoGrid: AutoGridENUMS,
    Textarea: TextareaENUMS,
    FormLabel: FormLabelENUMS,
    Input: InputENUMS,
    Transition: TransitionENUMS,
    Modal: ModalENUMS,
    Tooltip: TooltipENUMS,
    Checkbox: CheckboxENUMS,
    Radio: RadioENUMS,
    Badge: BadgeENUMS,
    Spinner: SpinnerENUMS,
    Button: ButtonENUMS,
    Icon: IconENUMS,
};
