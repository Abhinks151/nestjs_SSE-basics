import { Controller, Get, MessageEvent, Res, Sse } from '@nestjs/common';
import type { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { from, interval, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }


  @Get()
  index(@Res() res: Response) {
    res
      .type('text/html')
      .send(readFileSync(join(process.cwd(), 'src', 'index.html'), 'utf8'));
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(10000).pipe(
      switchMap(() => from(this.appService.getData())),
      map((data) => ({
        data,
      })),
    );
  }
}
