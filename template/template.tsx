// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/@custom-site/custom-site//typings/@custom-site/index.d.ts" />
import * as React from "react";
import { PageProps } from "@custom-site/page";

const headerContent = (props: PageProps): React.ReactElement<any> => {
  return (
  <div id="header">
    <div className="wrapper">
      <a href={props.site.url.relativePath} className="btn">{props.site.title}</a>
      <ul className="nav">
        <li className="downloads"><a href="https://github.com/custom-site/custom-site" className="btn">Github</a></li>
      </ul>
    </div>
  </div>
  );
}

const mainContent = (props: PageProps, content?: React.ReactNode): React.ReactElement<any> => {
  return (
    <div className="wrapper">
      <section>
        <h1>{props.article.title}</h1>
        {content}
      </section>
    </div>
  )
}

const wrappedContent = (props: PageProps, content?: React.ReactNode): React.ReactElement<any> => {
  return (
    <body>
      {headerContent(props)}
      {mainContent(props, content)}
    </body>
  );
};

export const bodyTemplate = (props: PageProps) => (content?: React.ReactNode): React.ReactElement<any> => {
  const newContent = wrappedContent(props, content);
  return newContent;
};
