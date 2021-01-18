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
                path: "src/components/{{componentName}}/{{componentName}}.js",
                templateFile: "plop-templates/component.hbs",
            },
            {
                type: "add",
                path:
                    "src/components/{{componentName}}/{{componentName}}.stories.js",
                templateFile: "plop-templates/component-stories.hbs",
            },
            {
                type: "add",
                path:
                    "src/components/{{componentName}}/{{componentName}}.test.js",
                templateFile: "plop-templates/component-test.hbs",
            },
            {
                type: "add",
                path: "src/components/{{componentName}}/{{componentName}}.scss",
                templateFile: "plop-templates/component-scss.hbs",
            },
            {
                type: "add",
                path: "src/components/{{componentName}}/index.js",
                templateFile: "plop-templates/index.hbs",
            },
            {
                type: "append",
                path: "src/components/core/index.js",
                template: `export * from "../{{componentName}}";`,
            },
        ],
    });
};
