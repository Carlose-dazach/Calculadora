import { useState } from 'react';
 
export function Calculadora() {
  // Estados para los números, la operación y el resultado
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState('suma');
  const [resultado, setResultado] = useState(null);
 
  // Función que realiza los cálculos
  const calcular = (e) => {
    e.preventDefault();
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
 
    // Validación de los campos
    if (isNaN(n1) || !num1 || isNaN(n2) || !num2) {
      setResultado('Por favor ingresa dos números válidos');
      return;
    }
 
    let res;
    switch (operacion) {
      case 'suma':
        res = n1 + n2;
        break;
      case 'resta':
        res = n1 - n2;
        break;
      case 'multi':
        res = n1 * n2;
        break;
      case 'divi':
        if (n2 === 0) {
          res = 'No se puede dividir por cero';
        } else {
          res = n1 / n2;
        }
        break;
      default:
        res = 0;
    }
 
    setResultado(res);
  };
 
  return (
    <div>
      <h2>Operaciones en React</h2>
      <form onSubmit={calcular}>
        {/* Primer número */}
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
 
        {/* Segundo número */}
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
 
        {/* Selector de operaciones */}
        <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multi">Multiplicación</option>
          <option value="divi">División</option>
        </select>
 
        {/* Botón de envío */}
        <button type="submit">Calcular</button>
      </form>
 
      {/* Mostrar resultado */}
      {resultado !== null && (
        <div>
          <h3>Resultado: {resultado}</h3>
        </div>
      )}
    </div>
  );
}