import React, { useState } from 'react';
import { Button, Card, Col, Input, Row } from 'reactstrap';

function Home(props) {

    const [goldPrice,setGoldPrice] = useState();
    const [weight,setWeight] = useState();
    const [total,setTotal] = useState();

    const user = {
        userName : 'Manjunath',
        isPrivilaged : false
    }

    const handleGoldPrice = (event) =>{
        setGoldPrice(event.target.value)
    }

    const handleWieght = (event) =>{
        setWeight(event.target.value)
    }

    const handleCalculate = () => {
        setTotal(goldPrice * weight);
    }

    const handleClose = () =>{
        setGoldPrice(0);
        setWeight(0);
        setTotal();
    }

    const handlePrint = () => {
        window.print();
    }

    return (
        <div>
            <Row>
                <Col style={{textAlign:'end'}}>
                    <span style={{fontWeight:'600'}}> Welcome {user.userName} </span>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'end'}}>
                    <span style={{fontWeight:'450'}}> {user.isPrivilaged ? 'Privileged User' : 'Normal User'} </span>
                </Col>
            </Row>
            <Row >
                <Col>
                <Card className="calculate-card">
                    <Row>
                        <Col sm={4}>
                            <span className="labels">Gold Price (per gram)</span>
                        </Col>
                        <Col>
                            <Input className="form-controls" type="text" value={goldPrice} onChange={handleGoldPrice} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <span className="labels">Weight (grams)</span>
                        </Col>
                        <Col>
                            <Input className="form-controls" type="text" value={weight} onChange={handleWieght} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <span className="labels">Total Price</span>
                        </Col>
                        <Col>
                            <Input className="form-controls" type="text" value={total} readOnly />
                        </Col>
                    </Row>
                    {user.isPrivilaged ? 
                    <Row>
                        <Col sm={4}>
                            <span className="labels">Discount %</span>
                        </Col>
                        <Col>
                            <Input className="form-controls" type="text" value={2} />
                        </Col>
                    </Row>
                    :
                    <></>
                    }
                    <Row>
                        <Col sm={3}>
                            <Button className="footer-buttons" color="secondary" onClick={handleCalculate} >Calculate</Button>
                        </Col>
                        <Col sm={3}>
                            <Button className="footer-buttons" color="secondary" onClick={handlePrint}>Print to screen</Button>
                        </Col>
                        <Col sm={3}>
                            <Button className="footer-buttons" color="secondary">Print to File</Button>
                        </Col>
                        <Col sm={3}>
                            <Button className="footer-buttons" color="secondary">Print to Paper</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} style={{textAlign:'end'}}>
                            <Button className="footer-buttons" color="secondary" onClick={handleClose}>Close</Button>
                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Home;