import { IndexedFormula } from "rdflib";

export function loadMarkdown(
  store: IndexedFormula,
  uri: string
): Promise<string> {
  return store.fetcher
    .webOperation("GET", uri, {
      headers: { accept: "text/markdown" },
    })
    .then((response) => response.responseText);
}

export function saveMarkdown(
  store: IndexedFormula,
  uri: string,
  data: string
): Promise<Response> {
  return store.fetcher.webOperation("PUT", uri, {
    data,
    contentType: "text/markdown; charset=UTF-8",
  });
}
