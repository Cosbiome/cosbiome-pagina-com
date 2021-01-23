import React from "react";

const FormContacto = () => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Nombre</label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Telefono</label>
          <input type="number" className="form-control" id="inputPassword4" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Correo electronico</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Interes</label>
          <input type="text" className="form-control" id="inputPassword4" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="inputCity">Nota</label>
          <textarea className="form-control" id="inputCity"></textarea>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default FormContacto;
