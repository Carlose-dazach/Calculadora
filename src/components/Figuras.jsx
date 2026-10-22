import { useState } from 'react';
import './Figuras.css';

export function Figuras() {

  // Estados para los números, figura seleccionada y resultado
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [figura, setFigura] = useState('');
  const [resultado, setResultado] = useState(null);

  // Calcular área del triángulo
  const calcularTriangulo = (e) => {
    e.preventDefault();

    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || !numero1 || isNaN(n2) || !numero2) {
      setResultado('Por favor ingresa dos números válidos');
      return;
    }

    const area = (n1 * n2) / 2;

    setResultado('Área del triángulo: ' + area);
  };

  // Calcular área del rectángulo
  const calcularRectangulo = (e) => {
    e.preventDefault();

    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || !numero1 || isNaN(n2) || !numero2) {
      setResultado('Por favor ingresa dos números válidos');
      return;
    }

    const area = n1 * n2;

    setResultado('Área del rectángulo: ' + area);
  };

  // Calcular área del cuadrado
  const calcularCuadrado = (e) => {
    e.preventDefault();

    const n1 = parseFloat(numero1);

    if (isNaN(n1) || !numero1) {
      setResultado('Por favor ingresa un número válido');
      return;
    }

    const area = n1 * n1;

    setResultado('Área del cuadrado: ' + area);
  };

  return (
    <div className="contenedor">

      <div className="card">

        <h1>Áreas de Figuras</h1>

        <p>
          Selecciona una figura e ingresa los valores necesarios.
        </p>

        <form>

          {/* Primer número */}
          <div className="campo">

            <label>
              {figura === 'cuadrado' ? 'Lado' : 'Base'}
            </label>

            <input
              type="number"
              placeholder="Ingresa un número"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
            />

          </div>

          {/* Segundo número */}
          {figura !== 'cuadrado' && (
            <div className="campo">

              <label>Altura</label>

              <input
                type="number"
                placeholder="Ingresa un número"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
              />

            </div>
          )}

          {/* Botones */}
          <div className="botones">

            <button
              type="submit"
              className="btn boton-triangulo"
              onClick={(e) => {
                setFigura('triangulo');
                calcularTriangulo(e);
              }}
            >
              Triángulo
            </button>

            <button
              type="submit"
              className="btn boton-rectangulo"
              onClick={(e) => {
                setFigura('rectangulo');
                calcularRectangulo(e);
              }}
            >
              Rectángulo
            </button>

            <button
              type="submit"
              className="btn boton-cuadrado"
              onClick={(e) => {
                setFigura('cuadrado');
                calcularCuadrado(e);
              }}
            >
              Cuadrado
            </button>

          </div>

        </form>

        {/* Mostrar resultado */}
        {resultado !== null && (
          <div className="resultado">
            <h3>{resultado}</h3>
          </div>
        )}

      </div>

    </div>
  );
}