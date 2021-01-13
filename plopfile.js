module.exports = function (plop) {
    plop.setGenerator("component", {
        description: "A Component and its related files",
        prompts: [
            {
                type: "input",
                name: "componentName",
                message: "Name of component",
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
                path: "src/components/{{componentName}}/{{componentName}}.scss",
                templateFile: "plop-templates/component-scss.hbs",
            },
        ],
    });
};
