import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
const envModule = ConfigModule.forRoot({
  isGlobal: true,
});
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgLibraryService } from './pg-library.service';
import config from './../ormconfig';

@Module({
  imports: [envModule, TypeOrmModule.forRoot(config)],
  providers: [PgLibraryService],
  exports: [PgLibraryService],
})
export class PgLibraryModule {}
