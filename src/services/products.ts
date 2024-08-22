import ProductsModel from "../models/products"

class ProductsService {
  static getAllProducts() {
    try { ProductsModel.read()
    } catch (error) {
      throw error;
    }
  }

  static create (product) {
    try { ProductsModel.write("parámetro")
    } catch (error) {
      throw error;
    }
  }

  static update (id, data) {
    try { ProductsModel.write("parámetro")
    } catch (error) {
      throw error;
    }
  }

  static deleteProduct (id) {
    try { ProductsModel.write("parámetro")
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
