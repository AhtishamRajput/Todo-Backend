const express = require("express");
const TodoController = require("../Controller/Todo");
const router = express.Router();

router.post("/Api/Todo", TodoController.CreatTodo);

router.get("/Api/Todo", TodoController.getTodo);

router.put("/Api/Todo", TodoController.UpdateTodo);

router.delete("/Api/Todo/:id", TodoController.DeleteTodo);

module.exports = router;
