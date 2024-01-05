import { memo } from 'react';
import './BlockItem.css';

function BlockItem({ title, value }) {
  return (
      <div className="BlockItem">
        <span className="BlockItem-Title">{title}: </span>
        <pre className="BlockItem-Value">{value}</pre>
      </div>
  );
}

export default memo(BlockItem);
