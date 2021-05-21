import { create } from "@storybook/theming";
import logoImg from "../src/assets/mainsail-ui-logo.png";

export default create({
    base: "light",
    brandTitle: "Mainsail UI",
    brandUrl: "https://mainsail-ui.com",
    brandImage: logoImg,
    panelPosition: "right",
});
