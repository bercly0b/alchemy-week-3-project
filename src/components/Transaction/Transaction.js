/* global BigInt */

import { memo } from 'react';
import { Utils } from 'alchemy-sdk';
import BlockItem from '../BlockItem/BlockItem';
import './Transaction.css';

function Transaction({ transaction }) {
  const { hash, from, to, nonce, value: rawValue } = transaction;

  const weiValue = BigInt(rawValue._hex).toString();
  const etherValue = Utils.formatUnits(weiValue, 'ether');
  const valueString = `${weiValue} Wei (${etherValue} ETH)`;

  return (
      <div className="Transaction">
        <BlockItem title="hash" value={hash} />
        <BlockItem title="from" value={from} />
        <BlockItem title="to" value={to} />
        <BlockItem title="value" value={valueString} />
        <BlockItem title="nonce" value={nonce} />
      </div>
  );
}

export default memo(Transaction);
