import { useForm } from "react-hook-form";
import './register.css'
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from "react-router-dom";

const Register = () => {
  const [errorRegister, setErrorRegister] = useState("")
  const [modalRegisterOk, setModalRegisterOk] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    profileImgUrl: null
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('role', formData.role);
    data.append('description', formData.description);
    data.append('profileImgUrl', formData.profileImgUrl);


    fetch('http://localhost:3200/api/v1/auth/signup', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setModalRegisterOk(data.user.name)
       
        setErrorRegister(data.errors)
      })
      .catch(error => console.log(error));
}

console.log(modalRegisterOk);

const handleChange = (event) => {
setFormData({
  ...formData,
  [event.target.name]: event.target.value

});

}

const handleDrop = (acceptedFiles) => {
  setFormData({
    ...formData,
    profileImgUrl: acceptedFiles[0]
  });
}


return (
  <div className="register">
    <h1 className="login__title">Crear cuenta</h1>
  <form className="register__form" onSubmit={handleSubmit}>
     <div className="register__section">
          <label className="register__label" htmlFor="name">
            Nombre
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="register__section">
          <label className="register__label" htmlFor="email">
            Email
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="register__section">
          <label className="register__label" htmlFor="password">
            Password
          </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>

        <div className="register__section">
          <label className="register__label" htmlFor="role">
            Role
          </label>
          <input type="text" name="role" value={formData.role} onChange={handleChange} />
        </div>

        <div className="register__section">
          <label className="register__label" htmlFor="description">
            Descripcion
          </label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>

        <div className="register__section">
        <label className="register__label image__profile">
      Imagen de perfil
        <Dropzone onDrop={handleDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              
            </div>
          )}
        </Dropzone>

      </label>
        </div>
      <button className="register__btn" type="submit">Enviar</button>

      {errorRegister ? (
        Object.values(errorRegister).map((error, index) => (
          <p key={index}>
            {error.msg}
          </p>
        ))
      ) : (
        ""
      )
      }
    </form>
    {
      modalRegisterOk ? <h2>Bienvenid@ {modalRegisterOk}, ya puedes <Link to="/login">ingresar</Link></h2> : ""
    }
    </div>
  );
    }

export default Register;
