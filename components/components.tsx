// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/custom-site/typings/@mdx-js/index.d.ts"/>

import { CustomComponents } from "@mdx-js/tag";
import * as React from "react";

export const customComponents = (): CustomComponents => {
  return {
    code: props => {
      return (
        <code {...props} />
      );
    },
  };
};

