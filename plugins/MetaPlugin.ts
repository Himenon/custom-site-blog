// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/@custom-site/custom-site/typings/@custom-site/index.d.ts"/>

import { HtmlMetaData, ExternalLink } from "@custom-site/page";
import { PluginFunctionMap } from "@custom-site/plugin";

const getOgImageSource = (globalLinks: ExternalLink["globalLinks"]): string | undefined => {
  if (!globalLinks) {
    return;
  }
  const result = globalLinks.find(item => {
    if (typeof item === "string") {
      return false;
    }
    return item.rel === "apple-touch-icon";
  })
  if (result && typeof result !== "string") {
    return result.href;
  }
  return;
}

export const onGenerateMetaData: PluginFunctionMap["onGenerateMetaData"] = payload => {
  const oldMetaData = payload.metaData;
  const newMetaData: HtmlMetaData = {
    ...oldMetaData,
    "og:title": oldMetaData.title,
    "og:url": "https://himenon.github.io/custom-site-blog",
    "og:description": oldMetaData.description,
    "og:image": getOgImageSource(oldMetaData.globalLinks)
  };
  return {
    metaData: newMetaData,
  };
};
