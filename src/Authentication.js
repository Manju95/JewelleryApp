import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

function Authentication(props) {

    const [userName,setUserName] = useState();
    const [Password,setPassword] = useState();
    const history = useHistory();

    const handleLogin = () =>{
        console.log("User cred => ",userName, Password);
        history.push('/home');
    }

    const handleUsername = (event) =>{
        setUserName(event.target.value);
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleCancel = () =>{
        setUserName('');
        setPassword('');
    }

    return (
        <div style={{width:'400px'}}>
            <Row>
                <Col sm={4}>
                    <span className="labels">Username</span>
                </Col>
                <Col sm={8}>
                    <input type="text" className="auth" value={userName} onChange={handleUsername} />
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <span className="labels">Password</span>
                </Col>
                <Col sm={8}>
                    <input type="password" className="auth" value={Password} onChange={handlePassword} />
                </Col>
            </Row>
            <Row>
                <Col sm={6}></Col>
                <Col sm={3}>
                    <Button color="secondary" onClick={handleLogin} >Login</Button>
                </Col>
                <Col sm={3}>
                    <Button color="secondary" onClick={handleCancel}>Cancel</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Authentication;