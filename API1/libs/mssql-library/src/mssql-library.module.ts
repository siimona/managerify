import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
const envModule = ConfigModule.forRoot({
  isGlobal: true,
});
import { TypeOrmModule } from '@nestjs/typeorm';
import { MssqlLibraryService } from './mssql-library.service';
import config from './../ormconfig';

@Module({
  imports: [envModule, TypeOrmModule.forRoot(config)],
  providers: [MssqlLibraryService],
  exports: [MssqlLibraryService],
})
export class MssqlLibraryModule {}
