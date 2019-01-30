"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const pretty = require('pretty');
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
    const page = payload.page;
    const currentPageAbsolutePath = path.join(payload.site.baseUrl, page.uri);
    const imageUrl = getOgImageSource(page.metaData.globalLinks);
    payload.page.metaData = {
        ...payload.page.metaData,
        extend: {
            meta: [
                {
                    name: "twitter:card",
                    content: "summary",
                },
                {
                    name: "twitter:site",
                    content: currentPageAbsolutePath,
                },
                {
                    property: "og:title",
                    content: page.metaData.title,
                },
                {
                    property: "og:url",
                    content: currentPageAbsolutePath
                },
                {
                    property: "og:description",
                    content: page.metaData.description
                },
                {
                    property: "og:image",
                    content: path.join(payload.site.baseUrl, imageUrl || "")
                },
            ]
        }
    };
    return payload;
};
exports.onAfterRenderPage = (payload) => {
    return {
        html: pretty(payload.html)
    };
};
