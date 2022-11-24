import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from 'src/entity/product.entity';
import { ProductsService } from 'src/services/products.service';
@Crud({
  model: {
    type: Product,
  },
})
@Controller('products')
export class ProductsController implements CrudController<Product> {

  constructor(public service: ProductsService) {}

}
