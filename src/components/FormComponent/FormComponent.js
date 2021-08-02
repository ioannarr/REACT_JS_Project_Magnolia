import React,{useState} from 'react';
import './FormComponent.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import  {Button} from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';

const FormComponent = ({createOrder}) => {

    const initialState ={
        Name: '',
        Email: '',
        Phone: '',
    };

    const [values,setValues] = useState(initialState)
    console.log(values)

    const orderChange = (e) =>{
    const {name,value} =e.target
    setValues({...values, [name]:value})
   
}

   const orderSubmit = (e) =>{
       e.preventDefault();
       createOrder(values);
       setValues({...initialState});
    
   }

 
return (

    <div>         
            <Form className="Form-Customer">
                <InputGroup className="mb-4">
                    <FormControl 
                    placeholder="Name"
                    name="Name"
                    onChange={orderChange}
                    value={values.Name}
                    />
                </InputGroup>

                <InputGroup className="mb-4">
                    <FormControl 
                    placeholder="Email"
                    name="Email"
                    onChange={orderChange}
                    value={values.Email}
                    />
                </InputGroup>

                  <InputGroup className="mb-4">
                    <FormControl 
                    placeholder="Phone"
                    name="Phone"
                    onChange={orderChange}
                    value={values.Phone}
                    />
                </InputGroup>
            </Form>

            <br></br>  
            <br></br>   
            <br></br> 

                <div className="Order">
                   <Button type='submit' onClick={orderSubmit} variant="dark">ORDER NOW</Button>
                </div>
        </div>
    );
};

export default FormComponent;
