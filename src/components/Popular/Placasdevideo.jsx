import React from 'react';
import './styleDaLocalizacao.css';
import kitupgrade from '../../assets/js/kitupgrade'; // Correct the import
import Item from "../Item/Item";

const Placasdevideo = () => {
  return (
    <div className='area'>
      <h1 className='titlearea'>Placasdevideo</h1>

      <div className='center'>
        <div className='popular-item'>
          {kitupgrade.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Placasdevideo;
