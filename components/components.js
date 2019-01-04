"use strict";
// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/custom-site/typings/@mdx-js/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.customComponents = () => {
    return {
        code: props => {
            return (React.createElement("div", { className: "custom-component-title" },
                React.createElement("code", Object.assign({}, props))));
        },
    };
};
