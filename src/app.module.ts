import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatingEngineController } from './rating_engine/rating_engine.controller';
import { RatingEngineService } from './rating_engine/rating_engine.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, RatingEngineController],
  providers: [AppService, RatingEngineService],
})
export class AppModule {}
