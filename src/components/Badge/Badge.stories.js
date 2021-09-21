import React from "react";

import { Badge as BadgeComponent } from "components/Badge";

export default {
    title: "Elements/Badge",
    component: BadgeComponent,
    argTypes: {
        color: {
            name: "color",
            type: { color: "string" },
            control: {
                type: "select",
            },
            options: Object.keys(BadgeComponent.colors),
        },
        size: {
            name: "size",
            type: { size: "string" },
            control: {
                type: "select",
            },
            options: Object.keys(BadgeComponent.sizes),
        },
    },
};

const Badge = (args) => <BadgeComponent {...args} />;

export const Basic = Badge.bind({});
Basic.args = {
    text: "Badge",
    variant: BadgeComponent.variants.basic,
};

export const InvertedColor = Badge.bind({});
InvertedColor.args = {
    text: "Badge",
    hasColorInverted: true,
    variant: BadgeComponent.variants.basic,
};

export const Round = Badge.bind({});
Round.args = {
    text: "Badge",
    isRounded: true,
    variant: BadgeComponent.variants.basic,
};

export const Removable = Badge.bind({});
Removable.args = {
    text: "Removable",
    variant: BadgeComponent.variants.removable,
    color: BadgeComponent.colors.blue,
    onRemove: () => alert("You removed the badge!"),
};

export const WithChildren = (args) => {
    return (
        <Badge {...args}>
            <span>Child span</span>
        </Badge>
    );
};
