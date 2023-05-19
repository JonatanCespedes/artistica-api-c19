const { OrderItem } = require("../database/models");

const getOrdersItems = async () => {
  try {
    return await OrderItem.findAll();
  } catch (error) {
    console.error("Error while fetching order item:", error);
    throw new Error("Error fetching order item");
  }
};

const getOrderItemById = async (id) => {
  try {
    return await OrderItem.findByPk(id);
  } catch (error) {
    console.error("Error while fetching order item:", error);
    throw new Error("Error fetching order item");
  }
};

const getOrderItemsByOrder = async (orderId) => {
  try {
    return await OrderItem.findAll({
      where: {
        orderId,
      },
      include: [{ association: "products" }],
    });
  } catch (error) {
    console.error("Error while fetching order item:", error);
    throw new Error("Error fetching order item");
  }
};

const insertOrderItem = async (data) => {
  try {
    return await OrderItem.create(data);
  } catch (error) {
    console.error("Error while fetching order item:", error);
    throw new Error("Error fetching order item");
  }
};

const updateOrderItem = async (data, itemId) => {
  try {
    return await OrderItem.update(data, {
      where: {
        id: itemId,
      },
    });
  } catch (error) {
    console.error("Error while updating order item:", error);
    throw new Error("Error updating order item");
  }
};

const deleteOrderItem = async (id) => {
  try {
    return await OrderItem.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Error while deleting order item:", error);
    throw new Error("Error deleting order item");
  }
};

const bulkDeleteOrderItems = async (orderId) => {
  try {
    return await OrderItem.destroy({
      where: {
        orderId,
      },
    });
  } catch (error) {
    console.error("Error while deleting order items:", error);
    throw new Error("Error deleting order items");
  }
};

module.exports = {
  getOrdersItems,
  getOrderItemById,
  getOrderItemsByOrder,
  insertOrderItem,
  updateOrderItem,
  deleteOrderItem,
  bulkDeleteOrderItems
};
