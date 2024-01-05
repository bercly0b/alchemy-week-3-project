import { useEffect, useState } from 'react';

import BlockItem from '../BlockItem/BlockItem';
import Transaction from '../Transaction/Transaction';
import './Block.css';

const FETCH_DELAY = 15000;

function Block({ alchemy }) {
  const [block, setBlock] = useState();

  useEffect(() => {
      const fetchBlock = () => alchemy.core.getBlockWithTransactions('latest')
        .then((block) => setBlock(block));

      fetchBlock();

      const intervalId = setInterval(() => fetchBlock(), FETCH_DELAY);
      return () => clearInterval(intervalId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!block) {
        return <div>Loading...</div>;
    }

  return (
      <div className="Block">
        <h1 className="Block-Title">Block {block.number}</h1>
        <BlockItem title="miner" value={block.miner} />
        <BlockItem title="hash" value={block.hash} />
        <BlockItem title="parent hash" value={block.parentHash} />
        <BlockItem title="nonce" value={block.nonce} />
        <BlockItem title="date" value={new Date(block.timestamp * 1000).toLocaleString()} />

        <div className="Transactions">
            <h3 className="Block-Title">Transactions:</h3>
            {block.transactions.map((transaction) => (
                <Transaction key={transaction.hash} transaction={transaction} />
            ))}
       </div>
      </div>
  );
}

export default Block;
