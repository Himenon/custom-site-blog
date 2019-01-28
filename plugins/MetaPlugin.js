"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getOgImageSource = (globalLinks) => {
    if (!globalLinks) {
        return;
    }
    const result = globalLinks.find(item => {
        if (typeof item === "string") {
            return false;
        }
        return item.rel === "apple-touch-icon";
    });
    if (result && typeof result !== "string") {
        return result.href;
    }
    return;
};
exports.onGenerateMetaData = payload => {
    const oldMetaData = payload.metaData;
    const newMetaData = {
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
