import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [elementos, setElementos] = useState([]); // Inicializamos como array vacío
  const [elem, setElem] = useState(''); // Para almacenar el valor del input
  const elemento = useRef (null);

  const Agregar = () => {
    setElementos([...elementos, Number(elem)]); // Agregamos el valor convertido en número
    setElem(''); // Limpiamos el input después de agregar
  };

  const swap = (elemento,i, j) => {
    let aux = elemento[i];
    elemento[i] = elemento[j];
    elemento[j] = aux;
  };

  const bubleSort = () => {
    const elemento = [...elementos];
    let tope = elemento.length;
    while (tope > 0) {
      for (let i = 0; i < tope - 1; i++) {
        if (elemento[i] > elemento[i + 1]) {
          swap(elemento, i, i + 1);
        }
      }
      tope--;
    }
    setElementos(elemento); // Actualizamos el estado con el array ordenado
  };

  return (
    <>
      <div>
        <h1>Visualización de Bubble Sort</h1>
      </div>
      <input
        onChange={(e) => setElem(e.target.value)}
        value={elem}
        type="number"
        placeholder="Agregar un número"
      />
      <div className="botones">
        <button onClick={Agregar}>Agregar</button>
        <button onClick={bubleSort}>Ordenar</button>
      </div>
      <div className="elementos">
        [{elementos + (" ")}]
      </div>
    </>
  );
}

export default App;
