import Order from './Order.js';


// Add an order to the cart
export const addOrder = async (req, res) => {
  try {
    const { gameId } = req.body;
    // Create a new order instance
    const order = new Order({
      UserName: req.user.UserName,
      GameID: gameId,
      OrderDate: new Date(),
    });
    // Save the order to the database
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an order from the cart
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    // Find all orders belonging to the logged-in user
    const orders = await Order.find({ UserName: req.user.UserName });
    res.status(200).json(orders);
    console.log(req.user);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
