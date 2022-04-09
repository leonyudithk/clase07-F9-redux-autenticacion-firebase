import React, { useEffect } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { listAsynPlantas } from '../Redux/actions/actionPlantas';

const ListPlantas = () => {

    const dispatch = useDispatch()
    dispatch(listAsynPlantas())

   const {plantas}= useSelector(store => store.plantas)
   console.log(plantas)

   useEffect(()=>{

   },[plantas])

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        
                        <th>Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        plantas.map((p, index) => (
                            <tr key={index}>
                                <td>{p.codigo}</td>
                                <td>
                                <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src:p.foto
                                        },
                                        largeImage: {
                                            src: p.foto,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} /> </td>
                                <td>{p.nombre}</td>
                                <td>{p.tipo}</td>
                                <td>{p.descripcion}</td>
                                <td>{p.precio}</td>
                               
                                <td><Button>
                                    <Image width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015685/edit_nh7sll.png' 
                                   
                                    />
                                </Button>
                                <Button>
                                    <Image width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png'
                                        ></Image>
                                </Button></td>
                                
                            </tr>
                        ))

                    }



                </tbody>
            </Table>
        </div>
    );
};

export default ListPlantas;