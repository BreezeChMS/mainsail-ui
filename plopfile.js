// See documentation for plop here: https://plopjs.com/documentation/

module.exports = function (plop) {
    plop.setGenerator("component", {
        description: "A Component and its related files",
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
            {
                type: "append",
                path: "src/components/core/index.js",
                pattern: /ENUM Import for plopjs/gi,
                template: `import { ENUMS as {{pascalCase componentName}}ENUMS } from "../{{pascalCase componentName}}";`,
            },
            {
                type: "append",
                path: "src/components/core/index.js",
                pattern: /export const ENUMS = {/gi,
                template: `\t{{pascalCase componentName}}: {{pascalCase componentName}}ENUMS,`,
            },
        ],
    });
};
