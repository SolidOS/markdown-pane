import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  DataBrowserContext,
  NewPaneOptions,
  PaneDefinition,
} from "pane-registry";
import { NamedNode, sym } from "rdflib";
import { icons, store } from "solid-ui";
import { saveMarkdown } from "./service";
import { Container } from "./container";

export const Pane: PaneDefinition = {
  icon: `${icons.iconBase}markdown.svg`,
  name: "markdown file",

  label: function (
    subject: NamedNode,
    context: DataBrowserContext
  ): string | null {
    const t = context.session.store.findTypeURIs(subject);
    if (t["http://www.w3.org/ns/iana/media-types/text/markdown#Resource"]) {
      return "Handle markdown file";
    }
    return null;
  },
  mintNew: function (context, options) {
    const newInstance = createFileName(options);
    return saveMarkdown(
      store,
      newInstance.uri,
      "# This is your markdown file\n\nHere be stuff!"
    )
      .then(() => ({
        ...options,
        newInstance,
      }))
      .catch((err) => {
        console.error("Error creating new instance of markdown file", err);
        return {
          ...options,
          newInstance,
        };
      });
  },
  render: (subject) => {
    const container = document.createElement("div");
    ReactDOM.render(<Container store={store} subject={subject} />, container);

    return container;
  },
};

function createFileName(options: NewPaneOptions): NamedNode {
  let uri = options.newBase;
  if (uri.endsWith("/")) {
    uri = uri.slice(0, -1) + ".md";
  }
  return sym(uri);
}
