import express from "express";
import ClienteController from "../controller/client-controller.mjs";
import TextController from "../controller/text-controller.mjs";
import BlockController from "../controller/block-controller.mjs";
import ClientBlockController from "../controller/clientBlock-controller.mjs";
import BlockTextController from "../controller/blockText-controller.mjs";
import UserController from "../controller/user-controller.mjs";

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
routes.get("/blocks", BlockController.listAllBlocks);
routes.post("/blocks", BlockController.createBlock);
routes.delete("/blocks/:id", BlockController.deleteBlock);
routes.put("/blocks/:id", BlockController.updateBlock);
/*=================CLIENT - BLOCK==================== */
routes.get("/clients-blocks", ClientBlockController.listAllClientsWithBlocks);
routes.post("/clients-blocks", ClientBlockController.associateClientWithBlock);
routes.delete("/clients-blocks/:id", ClientBlockController.deleteClientBlock);
/*=================BLOCK - TEXT==================== */
routes.get("/blocks-texts", BlockTextController.listAllBlockTexts);
routes.post("/blocks-texts", BlockTextController.associateBlockWithText);
routes.delete("/blocks-texts/:id", BlockTextController.deleteBlockText);
/*=================Usuários==================== */
routes.get("/users", UserController.listAllUsers);
routes.get("/users/:id", UserController.listOneUser);

export default routes;
