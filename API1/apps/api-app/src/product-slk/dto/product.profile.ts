import { MappingProfile } from '@automapper/types';
import { ProductSlk } from '../../../../../libs/mssql-library/src/dao/product-slk.';
import { ProductSlkDto } from './create.dto';

export const productProfile: MappingProfile = (mapper) => {
  mapper.createMap(ProductSlkDto, ProductSlk, {});
};
