import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HtmlFileToPdfBufferController} from './cats/cats.controller';
import { MyserviceService } from './myservice/myservice.service';

@Module({
  imports: [],
  controllers: [AppController, HtmlFileToPdfBufferController],
  providers: [AppService, MyserviceService],
})
export class AppModule {}
