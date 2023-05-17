module.exports = {
  getOrders: async (req, res) => {},
  getOrderById: async (req, res) => {},
  getOrderByUser: async (req, res) => {
    
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
  deleteOrder: async (req, res) => {},
};
