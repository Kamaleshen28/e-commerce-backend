const services = require('../services/product');
const httpError = require('../utils/httpError');

const addProduct = async (req, res) => {
  try{
    if(req.role != 'admin'){
      throw new httpError('Only admin can access',401);
    }
    const product = await services.createProduct(req.body);
    res.status(201).json({message:'Product added to the database', product: product});
  }catch(error){
    if(error instanceof httpError){
      res.status(error.code).json({message:error.message});
    }else{
      res.status(500).json({msg:'Something went wrong, try again later..'});
    }
  }
};

const viewProduct = async (req, res) => {
  try{
    const product = await services.getProducts(req.body);
    res.status(201).json({message:'Product added to the database', products: product});
  }catch(error){
    if(error instanceof httpError){
      res.status(error.code).json({message:error.message});
    }else{
      res.status(500).json({msg:'Something went wrong, try again later..'});
    }
  }
};

module.exports = {
  addProduct,
  viewProduct
};