import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        // Aquí puedes realizar la lógica para enviar la información del formulario
        console.log("Email:", email);
        console.log("Password:", password);

        props.closeLoginForm();
    };
    const handleClose = () => {  
        props.closeLoginForm();
    };

    return (
        <>
            <div style={{background:'#f7f8fc', padding: '20px'}}>
               
                    <>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FloatingLabel>
                        
                        <Button  className='button-login-u m-2' onClick={handleLogin}>Login</Button>                        
                        <Button  className='button-close-u m-2' onClick={handleClose}>Close</Button>
                       
                    </>
                
            </div>
        </>
    );
}
