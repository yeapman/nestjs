import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Readable } from "stream";
var mammoth = require("mammoth");
var pdf = require('html-pdf');

@Controller('cats')
export class CatsController {
  @Get()
  async getGenerateServiceDoc(
    @Res() res,
  )
  {
    mammoth.convertToHtml({path: "template-1.docx"})
      .then(function(result) {
      const html = result.value; // The generated HTML
      const messages = result.messages; // Any messages, such as warnings during conversion

        pdf.create(html).toBuffer(function(err, buffer){
          res.send(buffer)
       });
    })
  }




}
