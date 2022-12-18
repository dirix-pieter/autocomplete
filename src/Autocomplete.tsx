import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { AutocompleteContainerProps } from "../typings/AutocompleteProps";

import "./ui/Autocomplete.css";

export function Autocomplete({ sampleText }: AutocompleteContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
