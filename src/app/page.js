export default function Home() {
  return (
    <div className="container mx-auto">
      <h4 className="text-center my-20 text-4xl">
        Prueba de estilos iniciales
      </h4>
      <table className="table-auto border-collapse w-full ">
        <thead>
          <th className="border border-gray-400  py-2 px-5">Ítem</th>
          <th className="border border-gray-400  py-2 px-68">Nombre</th>
          <th className="border border-gray-400  py-2 px-20">Muestra</th>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400  py-2 px-10">1</td>
            <td className="border border-gray-400  py-2 px-10">Título 1</td>
            <td className="border border-gray-400  py-2 px-10">
              <h1>Título 1</h1>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">2</td>
            <td className="border border-gray-400  py-2 px-10">Título 2</td>
            <td className="border border-gray-400  py-2 px-10">
              <h2>Título 2</h2>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">3</td>
            <td className="border border-gray-400  py-2 px-10">Título 3</td>
            <td className="border border-gray-400  py-2 px-10">
              <h3>Título 3</h3>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">4</td>
            <td className="border border-gray-400  py-2 px-10">Párrafo</td>
            <td className="border border-gray-400  py-2 px-10">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">5</td>
            <td className="border border-gray-400  py-2 px-10">
              Botón sin relleno
            </td>
            <td className="border border-gray-400  py-2 px-10">
              <a href="#" className="btn">
                boton
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">6</td>
            <td className="border border-gray-400  py-2 px-10">
              Botón con relleno
            </td>
            <td className="border border-gray-400  py-2 px-10">
              <a href="#" className="btn bg-secondary">
                boton
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">7</td>
            <td className="border border-gray-400  py-2 px-10">Subhead 1</td>
            <td className="border border-gray-400  py-2 px-10">
              <p className="subhead-1">Subhead 1</p>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">8</td>
            <td className="border border-gray-400  py-2 px-10">Subhead 2</td>
            <td className="border border-gray-400  py-2 px-10">
              <p className="subhead-2">Subhead 2</p>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">9</td>
            <td className="border border-gray-400  py-2 px-10">Caption 1</td>
            <td className="border border-gray-400  py-2 px-10">
              <p className="caption-1">Caption 1</p>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">10</td>
            <td className="border border-gray-400  py-2 px-10">Título 1</td>
            <td className="border border-gray-400  py-2 px-10">
              <p className="caption-2">Caption 2</p>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">11</td>
            <td className="border border-gray-400  py-2 px-10">
              Color Primary
            </td>
            <td className="border border-gray-400  py-2 px-10">
              <div className="bg-primary w-1/4 text-primary">a</div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">12</td>
            <td className="border border-gray-400  py-2 px-10">
              Color Secondary
            </td>
            <td className="border border-gray-400  py-2 px-10">
              <div className="bg-secondary w-1/4 text-secondary">a</div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">13</td>
            <td className="border border-gray-400  py-2 px-10">
              Color Neutral
            </td>
            <td className="border border-gray-400  py-2 px-10">
              <div className="bg-neutral w-1/4 text-neutral">a</div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">14</td>
            <td className="border border-gray-400  py-2 px-10">Color Accent</td>
            <td className="border border-gray-400  py-2 px-10">
              <div className="bg-accent w-1/4 text-accent">a</div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">15</td>
            <td className="border border-gray-400  py-2 px-10">Color Dark</td>
            <td className="border border-gray-400  py-2 px-10">
              <div className="bg-dark w-1/4 text-dark">a</div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400  py-2 px-10">16</td>
            <td className="border border-gray-400  py-2 px-10">Color Grey</td>
            <td className="border border-gray-400  py-2 px-10">
              <div className="bg-grey w-1/4 text-grey">a</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
