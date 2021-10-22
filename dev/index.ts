import { sym } from "rdflib";
import { Pane } from "../src";
import { context, fetcher } from "./context";

const noteUri = prompt("Please enter URI of markdown file");

fetcher.load(noteUri).then(() => {
  const subject = sym(noteUri)
  const label = Pane.label(subject, context);
  const app = Pane.render(sym(noteUri), context);

  document.getElementById("label").replaceWith(label || '⚠ This pane would not show up, because label function returned null ⚠');
  document.getElementById("app").replaceWith(app);
});
