import { test } from 'vitest';
import { FuelAgent } from '../src/FuelAgent.js';
import { supplyCollateral } from '../src/tools.js';

test(
  'supplyCollateral',
  async () => {
    const tx = await supplyCollateral({
      amount: 12,
      symbol: 'USDT',
    });
    console.log('TX', tx);
  },
  {
    timeout: 500000,
  },
);
