"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/rocu//typings/@rocu/index.d.ts" />
const React = require("react");
const headerContent = (props) => {
    return (React.createElement("div", { id: "header" },
        React.createElement("div", { className: "wrapper" },
            React.createElement("a", { href: props.site.url.relativePath, className: "btn" }, props.site.title),
            React.createElement("ul", { className: "nav" },
                React.createElement("li", { className: "downloads" },
                    React.createElement("a", { href: "https://github.com/Himenon/rocu", className: "btn" }, "Github"))))));
};
const mainContent = (props, content) => {
    return React.createElement("div", { className: "wrapper" },
        React.createElement("section", null, content));
};
const wrappedContent = (props, content) => {
    return (React.createElement("body", null,
        headerContent(props),
        mainContent(props, content)));
};
exports.bodyTemplate = (props) => (content) => {
    const newContent = wrappedContent(props, content);
    return newContent;
};
