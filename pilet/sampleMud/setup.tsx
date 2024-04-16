// import / define the API of your app shell below
import type { PiletApi } from "../piral~/Pilet/node_modules/app-shell";
type AddScript = (path: string, attrs?: Record<string, string>) => void;
type AddStyles = (path: string, pos?: 'first' | 'last' | 'before' | ' after') => void;

export default function (api: PiletApi, addScript: AddScript, addStyles: AddStyles) {
    // wire-up your components here

    api.registerMenu(api.fromBlazor('Hover-Menu'));
    addStyles("_content/MudBlazor/MudBlazor.min.css");
    addScript("_content/MudBlazor/MudBlazor.min.js");
}
