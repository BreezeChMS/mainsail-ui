import { names } from "./Icon";
import Fuse from "fuse.js";

/**
 * Since the icon list of names is a bit static
 * and icons are not always intuitively named
 *
 * this map exists to set some overrides for the filter/search
 * to use more terms to find the proper icon
 *
 */

const options = {
    minMatchCharLength: 2,
    threshold: 0.3,
    keys: ["keyword"],
};

let iconList = [
    {
        keyword: "chevron right",
        icon: names.forward,
    },
    {
        keyword: "chevron left",
        icon: names.back,
    },
    {
        keyword: "chevron down",
        icon: names.view,
    },
    {
        keyword: "chevron left",
        icon: names.back,
    },
    {
        keyword: "plus",
        icon: names.add,
    },
    {
        keyword: "remove",
        icon: names.close,
    },
    {
        keyword: "envelope",
        icon: names.email,
    },
    {
        keyword: "exit",
        icon: names.logout,
    },
    {
        keyword: "dollar",
        icon: names.bill,
    },
    {
        keyword: "money",
        icon: names.bill,
    },
    {
        keyword: "dollar",
        icon: names.bill,
    },
    {
        keyword: "visible",
        icon: names.public,
    },
    {
        keyword: "hidden",
        icon: names.private,
    },
    {
        keyword: "pencil",
        icon: names.edit,
    },
    {
        keyword: "trash",
        icon: names.delete,
    },
    {
        keyword: "support",
        icon: names.help,
    },
    {
        keyword: "lock",
        icon: names.password,
    },
    {
        keyword: "automate",
        icon: names.bulktask,
    },
    {
        keyword: "bookmark",
        icon: names.saved,
    },
    {
        keyword: "image",
        icon: names.photo,
    },
    {
        keyword: "checked",
        icon: names.task,
    },
    {
        keyword: "sliders",
        icon: names.preferences,
    },
    {
        keyword: "person",
        icon: names.user,
    },
    {
        keyword: "person",
        icon: names.profile,
    },
];

// This will add our dynamically generated list from our files/plop scaffolding
Object.values(names).forEach((icon) => {
    iconList.push({
        keyword: icon,
        icon,
    });
});

const fuse = new Fuse(iconList, options);

export default (pattern) => fuse.search(pattern).map(({ item }) => item.icon);
