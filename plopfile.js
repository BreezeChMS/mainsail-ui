// See documentation for plop here: https://plopjs.com/documentation/
const _ = require("lodash");

module.exports = function (plop) {
    plop.setGenerator("component", {
        description: "Add a component and its related files",
        prompts: [
            {
                type: "input",
                name: "componentName",
                message: "Name of component",
            },
            {
                type: "input",
                name: "componentDescription",
                message: "(Optional) Description of component",
            },
            {
                type: "list",
                name: "category",
                message: "What category does this component fall under?",
                choices: [
                    "Elements",
                    "Forms",
                    "Layout",
                    "Overlay",
                    "User Feedback",
                    "Animation",
                ],
            },
        ],
        actions: [
            {
                type: "add",
                path:
                    "src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.js",
                templateFile: "plop-templates/component.hbs",
            },
            {
                type: "add",
                path:
                    "src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.stories.js",
                templateFile: "plop-templates/component-stories.hbs",
            },
            {
                type: "add",
                path:
                    "src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.test.js",
                templateFile: "plop-templates/component-test.hbs",
            },
            {
                type: "add",
                path:
                    "src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.scss",
                templateFile: "plop-templates/component-scss.hbs",
            },
            {
                type: "add",
                path: "src/components/{{pascalCase componentName}}/index.js",
                templateFile: "plop-templates/index.hbs",
            },

            // Add Export/Imports for Components
            {
                type: "append",
                path: "src/components/core/index.js",
                pattern: /Components Global Export for plopjs/gi,
                template: `export { {{pascalCase componentName}} } from "../{{pascalCase componentName}}";`,
            },

            // Add SCSS Imports to index for CSS Build
            {
                type: "append",
                path: "src/components/core/index.scss",
                pattern: /SASS Global Import for plopjs/gi,
                template: `@import "../{{pascalCase componentName}}/{{pascalCase componentName}}.scss";`,
            },
        ],
    });

    plop.setGenerator("icons", {
        description: "Add svg icon(s) to the Mainsail-ui icon set",
        prompts: [
            {
                type: "input",
                name: "iconNames",
                message:
                    "Filename(s) of icon(s) to add (lower snake_case space-delimited if multiple e.g. recycle trash)",
            },
        ],
        actions: function ({ iconNames }) {
            var actions = [];

            if (iconNames) {
                let names = iconNames.split(" ");
                let enumNameStr = "";
                let exportStr = "";

                names.forEach((name, idx) => {
                    // Get string for Enums names list
                    enumNameStr += `\t${_.snakeCase(name)}: "${_.snakeCase(
                        name
                    )}",${names.length > idx + 1 ? "\n" : ""}`;

                    // Get string for Icons/index exports
                    let noSpaces = _.replace(_.startCase(name), / /g, "");
                    exportStr += `export { default as ${noSpaces} } from "./${noSpaces}";${
                        names.length > idx + 1 ? "\n" : ""
                    }`;
                });

                actions.push("Adding to ENUMS names");
                actions.push({
                    type: "append",
                    path: "src/components/Icon/Icon.js",
                    pattern: /export const names = {/gi,
                    template: enumNameStr,
                });

                actions.push("Adding to Icons/index.js exports");
                actions.push({
                    type: "append",
                    path: "src/components/Icons/index.js",
                    pattern: /\/\/ added by plopjs/gi,
                    template: exportStr,
                });
            }

            return actions;
        },
    });
};
