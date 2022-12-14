import express from "express";
import ClienteController from "../controller/client-controller.mjs";
import TextController from "../controller/text-controller.mjs";

const routes = express.Router();

/*=====================CLIENT======================= */
routes.get("/clients", ClienteController.listAllClients);
routes.get("/clients/:id", ClienteController.listOneClient);
routes.post("/clients", ClienteController.createClient);
routes.delete("/clients/:id", ClienteController.deleteClient);
routes.put("/clients/:id", ClienteController.updateClient);
/*=====================TEXT======================= */
routes.get("/texts", TextController.listAllTexts);
routes.post("/texts", TextController.createText);
routes.delete("/texts/:id", TextController.deleteText);
routes.put("/texts/:id", TextController.updateText);
/*=====================BLOCK======================= */

export default routes;
