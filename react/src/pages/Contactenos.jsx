import React, { useState } from 'react';


const Contactenos = () => {
  // Estados para los campos del formulario
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    officialCountryName: '',
    comentarios: ''
  });
  const [errors, setErrors] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);

  // Handler para cambios en los campos
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Handler para envío del formulario
  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = [];
    if (!form.name.trim()) newErrors.push('El nombre está vacío.');
    if (!form.phone.trim()) newErrors.push('El teléfono está vacío.');
    if (!form.email.trim()) newErrors.push('El email está vacío.');
    if (!form.country) newErrors.push('Seleccione un país.');
    if (!form.comentarios.trim()) newErrors.push('Debe ingresar un comentario.');
    setErrors(newErrors);
    if (newErrors.length === 0) {
      if (editId) {
        setContacts(contacts.map(c => c.id === editId ? { ...form, id: editId } : c));
        setEditId(null);
      } else {
        setContacts([...contacts, { ...form, id: Date.now() }]);
      }
      setForm({ name: '', phone: '', email: '', country: '', officialCountryName: '', comentarios: '' });
    }
  };

  // Eliminar contacto
  const handleDelete = id => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  // Iniciar edición
  const handleEdit = contact => {
    setEditId(contact.id);
    setForm({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      country: contact.country,
      officialCountryName: contact.officialCountryName || '',
      comentarios: contact.comentarios
    });
  };

  // Guardar edición
  const handleSaveEdit = id => {
    setContacts(contacts.map(c => c.id === id ? { ...c, ...editForm } : c));
    setEditId(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nuevo Contacto</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="inputName">Nombre Completo (*)</label>
          <input type="text" className="form-control" id="inputName" name="name" placeholder="Tu nombre" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="inputPhone">Teléfono (*)</label>
          <input type="tel" className="form-control" id="inputPhone" name="phone" placeholder="Ej: +56 9 1234 5678" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email (*)</label>
          <input type="email" className="form-control" id="inputEmail" name="email" placeholder="name@example.com" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="selectCountry">País (*)</label>
          <select className="form-control" id="selectCountry" name="country" value={form.country} onChange={handleChange} required>
            <option value="">Seleccione País</option>
            <option value="CL">Chile</option>
            <option value="AR">Argentina</option>
            <option value="PE">Perú</option>
            <option value="CO">Colombia</option>
            {/* Puedes agregar más países o cargar dinámicamente */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="inputOfficialCountryName">Nombre Oficial del País</label>
          <input type="text" className="form-control" id="inputOfficialCountryName" name="officialCountryName" value={form.officialCountryName} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="textareaComentario">Comentarios (*)</label>
          <textarea className="form-control" id="textareaComentario" name="comentarios" rows="3" value={form.comentarios} onChange={handleChange} required></textarea>
        </div>
        {errors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
          </div>
        )}
        <div className="form-group">
          <small>(*) Campos obligatorios</small><br /><br />
          <button className="btn btn-sm btn-warning" type="button" onClick={() => { setForm({ name: '', phone: '', email: '', country: '', officialCountryName: '', comentarios: '' }); setEditId(null); }}>Limpiar</button>&nbsp;
          <button className="btn btn-sm btn-primary" type="submit">{editId ? 'Guardar Cambios' : 'Enviar Formulario'}</button>
          {editId && <button className="btn btn-sm btn-secondary ml-2" type="button" onClick={() => { setEditId(null); setForm({ name: '', phone: '', email: '', country: '', officialCountryName: '', comentarios: '' }); }}>Cancelar Edición</button>}
        </div>
      </form>
      <hr className="my-5" />
      <h2 className="mb-4">Listado Contactos</h2>
      <div className="row">
        {contacts.length === 0 ? (
          <div className="col-12 text-center">
            <div className="alert alert-warning">No hay contactos para mostrar.</div>
          </div>
        ) : (
          contacts.map(contact => (
            <div className="col-md-6 col-lg-4 mb-4" key={contact.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{contact.name || 'Sin Nombre'}</h5>
                  <p className="card-text"><strong>Teléfono:</strong> {contact.phone || 'N/A'}</p>
                  <p className="card-text"><strong>Email:</strong> {contact.email}</p>
                  <p className="card-text"><strong>País:</strong> {contact.country}</p>
                  <p className="card-text"><strong>Comentarios:</strong> {contact.comentarios}</p>
                  <button className="btn btn-sm btn-warning mr-2" onClick={() => handleEdit(contact)}>Editar</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(contact.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Contactenos;
