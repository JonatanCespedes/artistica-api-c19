const {
  deleteOrder,
  getOrderById,
  getOrderByUser,
  getOrders,
  insertOrder,
  updateOrder,
} = require("../services/order.service");
const {
  deleteOrderItem,
  getOrderItemById,
  getOrderItemsByOrder,
  getOrdersItems,
  insertOrderItem,
  updateOrderItem,
} = require("../services/orderItems.service");

module.exports = {
  getOrders: async (req, res) => {
    try {
      const orders = await getOrders();
      const RESPONSE = {
        count: orders.length,
        orders
      }
      return res.status(200).json(RESPONSE);
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  },
  getOrderById: async (req, res) => {
    try {
      const ORDER_ID = req.params.orderId;
      const order = await getOrderById(ORDER_ID);
      return res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  },
  getOrderByUser: async (req, res) => {
    const { id } = req.user
    return res.json(id)
  },
  addToOrder: async (req, res) => {
    // id usuario
    // id orden
    // id producto + quantity
    // Verificar si existe una orden para el usuario
    // Si existe una orden, agregar el item
    // Si No existe una orden, crear la orden y agregar el item
  },
  removeOneItemFromOrder: async (req, res) => {
    // id usuario
    // id orden
    // id item
    // Si el item en el campo quatity tiene mas de 1, actualizo la cantidad (+1)
    // Si el item en el campo quantity tiene 1, elimino el item
  },
  removeAllFromOrder: async (req, res) => {
    // id usuario
    // id orden
    // id item
    // Si la orden tiene mas de 1 item, elimino el item
    // Si la orden tiene 1 item, elimino el item, elimino la orden
  },
  clearOrder: async (req, res) => {
    // id usuario
    // id orden
    // Elimino los items de la orden
    // Elimino la orden
  },
};
