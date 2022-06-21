import { MappingProfile } from '@automapper/types';
import { Product } from '../entity/product.entity';
import { ProductDto } from './create-product.dto';

export const productProfile: MappingProfile = (mapper) => {
  mapper.createMap(ProductDto, Product, {});
};
