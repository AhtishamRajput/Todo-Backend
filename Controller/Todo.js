const TodoModel = require("../modal/TodoSchema");

const TodoController = {
  getTodo: (req, res) => {
    TodoModel.find({}, (error, data) => {
      if (error) {
        res.json({
          message: `Internal Error ${error}`,
          status: false,
        });
      } else {
        res.json({
          message: `succesfully get`,
          status: true,
          data: data,
        });
      }
    });
  },

  CreatTodo: (req, res) => {
    const body = req.body;
    if (!body.todo) {
      res.json({
        message: `required Feild Are missing`,
        status: false,
      });
    }
    const objToSend = {
      todo: body.todo,
    };
    TodoModel.create(objToSend, (error, data) => {
      if (error) {
        res.json({
          message: `Internal Error ${error}`,
          status: false,
        });
      } else {
        res.json({
          message: `Created`,
          status: true,
        });
      }
    });
  },

  UpdateTodo: (req, res) => {
    const body = req.body;
    if (!body.todo) {
      res.json({
        message: `required Feild Are missing`,
        status: false,
      });
    }
    const objToSend = {
      todo: body.todo,
    };
    TodoModel.findByIdAndUpdate(body.id, objToSend, (error, data) => {
      if (error) {
        res.json({
          message: `Internal Error ${error}`,
          status: false,
        });
      } else {
        res.json({
          message: `Created`,
          status: true,
        });
      }
    });
  },

  DeleteTodo: (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        res.json({
          message: `Internal Error ${error}`,
          status: false,
        });
      } else {
        res.json({
          message: `succesfully Delete`,
          status: true,
        });
      }
    });
  },
};
module.exports = TodoController;
