import { sym } from "rdflib";
import { Pane } from "../src";
import { context, fetcher } from "./context";

var noteUri = prompt("Please enter URI of markdown file");

fetcher.load(noteUri).then(() => {
  const app = Pane.render(sym(noteUri), context);
  console.log(app);

  document.getElementById("app").replaceWith(app);
});
