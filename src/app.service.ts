import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getData() {
    const reposnse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await reposnse.json();
    return data;
  }
}
