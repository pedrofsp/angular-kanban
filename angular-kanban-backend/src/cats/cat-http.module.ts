import { Module } from '@nestjs/common';
import { CatsModule } from './cat.module';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [CatsModule],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatHttpModule {}
