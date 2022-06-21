import { MappingProfile } from '@automapper/types';
import { ProductMob } from '../../../../../libs/pg-library/src/dao/product-mob.';
import { ProductMobDto } from './create.dto';

export const productProfile: MappingProfile = (mapper) => {
  mapper.createMap(ProductMobDto, ProductMob, {});
};
