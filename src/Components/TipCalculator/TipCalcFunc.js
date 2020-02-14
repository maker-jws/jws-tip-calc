import React, { useState } from 'react';
import {Card, CardHeader, Col, Row, Form,FormGroup, Input, InputGroup, InputGroupText, InputGroupAddon, Button } from 'reactstrap';
import IGItem from './input-components/IGItem'
let state = {
  totalBill: "",
  tipPercent: "",
  partySize: "",
  calculatedTip: "",
  calculatedBill: "",
  pricePerGuest: "",
  inputFlag: false,
}

const TipCalcFunc = () => {
    const [partyBill, setBill] = useState(0);
    const [partySize, setSize] = useState(0);
    const [partyTip,  setTip] = useState(0);

    // const handleTipChange = (e) => {
    //     if (typeof parseInt(e.target.value) === "number") {
    //         this.setState({
    //             [e.target.name]: e.target.value
    //         });
    //     } else alert("a warning")
    // }

    const handleFormChange = (e)=> {
      const name = e.currentTarget.name
      if (name === "totalBill"){
        state[name] = e.currentTarget.value
        setBill(state[name])
      } else if (name === "partySize"){
        state[name] = e.currentTarget.value
        setSize(state[name])
      } else if (name === "tipPercent"){
        state[name] = e.currentTarget.value
        setTip(state[name])
      }
    }
    const calculatedBill = ( data ) => {    
      for (let key in data) {
       if(typeof data[key]!=="boolean")
       data[key] = parseFloat( data[key], 4 )
      }
      data.calculatedTip = data.totalBill * ( data.tipPercent / 100 )
      data.calculatedBill = parseFloat((data.totalBill + data.calculatedTip), 4)
      if (data.partySize > 1) {
       data.pricePerGuest = parseFloat(( data.calculatedBill / data.partySize).toFixed(3),4)
      }
      return data 
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const values = { ...state }
      const finalBill = calculatedBill(values)
      return state = { ...finalBill }
    }
        return (
          <>
            <Row>
              <Col>
                <Card>
                  <CardHeader>Tip Calculator</CardHeader>
                  <Form onSubmit={handleFormSubmit}> 
                  <FormGroup>
                    {/* Total Bill */}
                  <IGItem/>
                  <InputGroup >
                    {/* Should programmatically generate the inputGroup Text  */}
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Total Bill</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Total Bill" name="totalBill" value = {partyBill} onChange={handleFormChange}/>
                  </InputGroup>

                   {/* Party Size Bill */}
                  <InputGroup>
                    {/* Should programmatically generate the inputGroup Text  */}
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Party Size</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="partySize" name="partySize" value={partySize} onChange={handleFormChange}/>
                  </InputGroup>

                   {/* Tip Drop Down Bill */}
                  <InputGroup>
                    {/* Should programmatically generate the inputGroup Text  */}
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Tip Percentage</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Enter Tip (100%)" name="tipPercent" value={partyTip} onChange={handleFormChange}/>
                  </InputGroup>
                  <br/>
                  <Button type="submit">Calculate Tip</Button>
                  </FormGroup>
                  </Form>
                </Card>
              </Col>
            </Row>
          </>
        ) 
}

export default TipCalcFunc;