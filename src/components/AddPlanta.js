import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fileUploas } from '../Helpers/fileUploas';
import { useForm } from '../Hooks/useForm';
import { addAsyn, addSyn } from '../Redux/actions/actionPlantas';
import ListPlantas from './ListPlantas';

const AddPlanta = () => {

    const dispatch = useDispatch()

    let [values, handleInputChange, reset] = useForm({
        nombre: '',
        codigo: '',
        tipo: '',
        descripcion: '', 
        precio: '',
        foto: ''
      })

     const { nombre, codigo, tipo,  descripcion, precio, foto } = values

     const handleSubmit =(e)=>{
        e.preventDefault()
         dispatch(addAsyn(values))
        console.log(nombre, codigo, tipo , descripcion, precio, foto)
        reset()
    }
// Para enviar a la imagen
const handleFileChange =(e)=>{
    const file = e.target.files[0]
    fileUploas(file)
        .then(resp =>{
           values.foto = resp
            console.log(resp)
        })
        .catch(error =>{
            console.log(error.message)
        })
}

    return (
        <div>
             <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Planta</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Enter nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="descripcion" placeholder="Enter descripcion" value={descripcion} onChange={handleInputChange} />

                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" name="codigo" placeholder="El codigo contine dos letras y 3 numeros" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Tipo o Categoria</Form.Label>
                    <Form.Control type="text" name="tipo" placeholder="Categoria o tipo" value={tipo} onChange={handleInputChange} />


                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="precio" placeholder="El precio en Pesos Colomb iano" value={precio} onChange={handleInputChange} />
                

                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="foto" placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />
                
                </Form.Group>

                <Button type="submit">
                    Agregar
                </Button>
             
            </Form>
            <ListPlantas/>
        </div>
    );
};

export default AddPlanta;