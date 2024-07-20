import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/@index.js";
import * as Page1 from "../views/chatboot/chatbootView.js";
import * as Page2 from "../views/chatboot/ChatForm.js";
import * as Page4 from "../views/employee/employeeView.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("", Page0),
    createRoute("chatboot", [
        createRoute("chatbootView", Page1),
        createRoute("ChatForm", Page2)
    ]),
    createRoute("employee", [
        createRoute("employeeView", Page4)
    ])
];
export default routes;
