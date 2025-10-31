const EyewearProduct = require('../models/eyewearProduct');

exports.getAllProducts = async (req, res) => {
  try {
    const { sortValue, searchValue } = req.body;
    const query = EyewearProduct.find({
      name: { $regex: searchValue || '', $options: 'i' },
    });
    const products = await query.sort({ name: sortValue || 1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    await EyewearProduct.create(req.body);
    res.status(200).json({ message: 'Product Added Successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updated = await EyewearProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product Updated Successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await EyewearProduct.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product Deleted Successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await EyewearProduct.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductsByUserId = async (req, res) => {
  try {
    const { userId, sortValue, searchValue } = req.body;
    const query = EyewearProduct.find({
      userId,
      name: { $regex: searchValue || '', $options: 'i' },
    });
    const products = await query.sort({ name: sortValue || 1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
