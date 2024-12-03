import React from 'react';
import { useStore } from '../store'; // Certifique-se de ajustar o caminho

import Placasdevídeo from './Popular/Placasdevideo';

import AdicionarProduto from './AdicionarProduto';


function Home() {

  const removeProduct = useStore((state) => state.removeProduct); // Função para remover produto do catálogo

  // Função para remover produto
  const handleRemoveProduct = (productId) => {
    removeProduct(productId); // Chama a função da store para remover o produto
  };

  return (
    

    <div>

      <main> 
        <h2>Na Kazum você monta o setup do seu jeitinho pessoal</h2>
        <p>Explore nosso portifólio!.</p>
      </main>


    


   
          <Placasdevídeo/>
          


         
 
    </div>
  );
}

export default Home;


// ERROR in ./src/components/Home.jsx 7:0-46
// Module not found: Error: Can't resolve './Popular/kitupgrade' in 'C:\Users\FALLEN\Downloads\E-Commerce-main (2)\E-Commerce-main\src\components'
// ERROR in ./src/components/Home.jsx 9:0-44
// Module not found: Error: Can't resolve './Popular/Gabinetes' in 'C:\Users\FALLEN\Downloads\E-Commerce-main (2)\E-Commerce-main\src\components'