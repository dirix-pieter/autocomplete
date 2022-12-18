import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { AutocompletePreviewProps } from "../typings/AutocompleteProps";

export function preview({ sampleText }: AutocompletePreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/Autocomplete.css");
}
