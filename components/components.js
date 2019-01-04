"use strict";
// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/custom-site/typings/@mdx-js/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const Prism = require("prismjs");
const React = require("react");
/**
 * ハイライトしたい言語のjsファイルを読み込んでおく
 */
require("prismjs/components/prism-typescript.min.js");
const SUPPORT_LANGUAGES = Object.keys(Prism.languages);
const getLanguageDefinition = (lang) => {
    if (SUPPORT_LANGUAGES.includes(lang)) {
        return Prism.languages[lang];
    }
    return null;
};
exports.customComponents = () => {
    return {
        pre: props => React.createElement(React.Fragment, null, props.children),
        code: props => {
            const lang = props.className ? props.className.slice("language-".length) : "";
            const code = typeof props.children === "string" ? props.children : "";
            const grammar = getLanguageDefinition(lang);
            let highlightHtml;
            if (grammar) {
                highlightHtml = Prism.highlight(code, grammar);
            }
            const newProps = {
                ...props,
                children: undefined,
                dangerouslySetInnerHTML: {
                    __html: highlightHtml
                }
            };
            return (React.createElement("pre", { className: props.className },
                React.createElement("code", Object.assign({}, newProps))));
        },
    };
};
