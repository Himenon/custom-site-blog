// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/custom-site/typings/@mdx-js/index.d.ts"/>

import { CustomComponents } from "@mdx-js/tag";
import * as Prism from "prismjs";
import * as React from "react";

/**
 * ハイライトしたい言語のjsファイルを読み込んでおく
 */
require("prismjs/components/prism-typescript.min.js")

const SUPPORT_LANGUAGES = Object.keys(Prism.languages);

const getLanguageDefinition = (lang: string): Prism.LanguageDefinition | null => {
  if (SUPPORT_LANGUAGES.includes(lang)) {
    return Prism.languages[lang];
  }
  return null;
}

export const customComponents = (): CustomComponents => {
  return {
    pre: props => <>{ props.children }</>,
    code: props => {
      const lang = props.className ? props.className.slice("language-".length) : "";
      const code = typeof props.children === "string" ? props.children : "";
      const grammar = getLanguageDefinition(lang);
      let highlightHtml: string | undefined;
      if (grammar) {
        highlightHtml = Prism.highlight(code, grammar);
      }
      const newProps: JSX.IntrinsicElements["code"] = {
        ...props,
        children: undefined,
        dangerouslySetInnerHTML: {
          __html: highlightHtml
        }
      };
      return (
      <pre className={props.className}>
        <code {...newProps} />
      </pre>
      );
    },
  };
};
