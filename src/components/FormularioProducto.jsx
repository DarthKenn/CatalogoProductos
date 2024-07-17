import React, { useState, useEffect } from 'react';

const FormularioProducto = ({ agregarProducto, productoEditable, cancelarEdicion }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [marca, setMarca] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  const categorias = [
    "Comida",
    "Licores",
    "Electrodomésticos",
    "Televisores",
    "Herramientas",
    "Muebles",
    "Decoración",
    "Utensilios de Cocina",
    "Vajilla",
    "Electrónica",
    "Ropa",
    "Bebidas"
  ];

  useEffect(() => {
    if (productoEditable) {
      setNombre(productoEditable.nombre);
      setCategoria(productoEditable.categoria);
      setPrecio(productoEditable.precio);
      setMarca(productoEditable.marca);
      setDescripcion(productoEditable.descripcion);
    } else {
      setNombre('');
      setCategoria('');
      setPrecio('');
      setMarca('');
      setDescripcion('');
    }
  }, [productoEditable]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre || !categoria || !precio || precio <= 0 || !marca || !descripcion) {
      setError('Por favor, complete todos los campos correctamente.');
      return;
    }
    agregarProducto({ nombre, categoria, precio, marca, descripcion });
    setNombre('');
    setCategoria('');
    setPrecio('');
    setMarca('');
    setDescripcion('');
    setError('');
  };


  return (
    <form onSubmit={manejarEnvio}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label className="form-label">Nombre del Producto</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <select
          className="form-select"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccione una categoría</option>
          {categorias.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          className="form-control"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Marca</label>
        <input
          type="text"
          className="form-control"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary me-2">{productoEditable ? 'Actualizar Producto' : 'Agregar Producto'}</button>
      {productoEditable && (
        <button type="button" className="btn btn-danger" onClick={cancelarEdicion}>Cancelar</button>
      )}
      {!productoEditable && (
        <button type="button" className="btn btn-danger" onClick={cancelarEdicion}>Cancelar</button>
      )}
    </form>
  );
};

export default FormularioProducto;















