import React, { useState } from 'react';
import { Form, Button  } from 'react-bootstrap';
import '../styles/Login.css';




export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        // Aquí puedes realizar la lógica para enviar la información del formulario
        console.log("Email:", email);
        console.log("Password:", password);
        
    };


    return (
        <div id="login">                          
                <section id='login-section' className='container-fluid'>
                    <div className="container-fluid d-flex justify-content-center align-items-center login-contain">
                        <div className="card align-items-center px-5" id="floating-card">
                            
                            <Form className='m-5'>
                               <h1 className='d-flex justify-content-center mb-4'>Login</h1>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)}/>
                                </Form.Group>                              
                                <Button onClick={handleLogin} className='container-fluid button-login-u mt-3'>
                                    SING IN
                                </Button>
                            </Form>                
                               
                            
                        </div>
                    </div>                    
                </section>            
        </div>
    );
}
