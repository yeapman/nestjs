import { Test, TestingModule } from '@nestjs/testing';
import {HtmlFileToPdfBufferController} from "./cats.controller";

describe('CatsController', () => {
  let controller: HtmlFileToPdfBufferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HtmlFileToPdfBufferController],
    }).compile();

    controller = module.get<HtmlFileToPdfBufferController>(HtmlFileToPdfBufferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


});
