import { NextFunction, Request, Response } from "express";
import ProductsService from "../services/products";

class ProductsController {
  static getAllProducts(req: Request, res: Response, next: NextFunction) {
    try { ProductsService.getAllProducts()
    } catch (error) {
      next(error);
    }
  }

  static create (req: Request, res: Response, next: NextFunction) {
    try { ProductsService.create(req.body)
    } catch (error) {
      next(error);
    }
  }

  static update (req: Request, res: Response, next: NextFunction) {
    try { ProductsService.update(req.params.id, req.body)
    } catch (error) {
      next(error);
    }
  }

  static deleteProduct (req: Request, res: Response, next: NextFunction) {
    try { ProductsService.deleteProduct(req.params.id)
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
