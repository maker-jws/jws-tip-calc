import React, { Component } from 'react';
import { Alert, Form, Col, Row, Label, Button, Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TipCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.setState({
            totalBill: 0,
            tipPercent: 0,
            partySize: 1,
            calculatedTip: 0,
            calculatedBill: 0,
            pricePerGuest: 0,
            inputFlag: false,
        })
    }
    calculateTip(data) {
        //assumes form verification is operational in child component
        //Triggered by sub-component call from inside handleFormSubmit\
        console.log(data)
        for (let key in data) {
            data[key] = parseFloat(data[key], 2)
        }
        data.calculatedTip = data.totalBill * (data.tipPercent / 100)
        data.calculatedBill = (data.totalBill + data.calculatedTip).toFixed(2)
        if (data.partySize > 1) {
            data.pricePerGuest = (data.calculatedBill / data.partySize).toFixed(2)

        }
        console.log(data)
        return data
    }
    styleTipDisplay() {
        //
    }
    handleFormChange = (e) => {
        const input = e.target.value
        if (isNaN(input)) {
            this.setState({
                [e.target.name]: "",
                inputFlag: true
            })
        } else if (!isNaN(input)) {
            this.setState({
                [e.target.name]: e.target.value,
                inputFlag: false
            });
        }

    }
    handleTipChange = (e) => {
        if (typeof parseInt(e.target.value) === "number") {
            this.setState({
                [e.target.name]: e.target.value
            });
        } else alert("a warning")
    }
    handleFormSubmit = (e) => {
        //setState for totalBill, tipPercent (based on dropdown), partySize
        e.preventDefault();
        const values = { ...this.state }
        const calculatedBill = this.calculateTip(values)
        this.setState({ ...calculatedBill })
    }
    render() {
        const { calculatedBill, partySize, calculatedTip, totalBill, tipPercent, inputFlag } = this.state
        const perGuest = (calculatedBill / partySize).toFixed(2)
        const perGuestTip = (this.state.calculatedTip / this.state.partySize).toFixed(2)
        const perGuestBill = (this.state.calculatedBill / this.state.partySize - perGuestTip).toFixed(2)


        return (
            <Col md="6" >
                <Card sm="6" style={{ margin: '1rem', backgroundColor: '#333', borderColor: '#333' }}>
                    <CardBody style={{ padding: '1rem' }}>
                        <Form >
                            <CardTitle style={{ color: 'white', fontSize: '24pt' }}>Tip Calculator</CardTitle>
                            <Card style={{ padding: '2rem', fontSize: '12pt', fontWeight: 'bold' }}>
                                <Col>
                                    <Label>Total Bill: $</Label>
                                    <Input type="numbers" placeholder="Total Bill" name="totalBill" value={totalBill} placeholder="Enter Total Bill ($)" onChange={this.handleFormChange} />
                                    {this.state.inputFlag === true && totalBill === "" ? <Alert color="warning">Please enter numbers!</Alert> : null}
                                </Col>
                                <Col>
                                    <label>Party Size</label>
                                    <Input onChange={this.handleFormChange} type="text" name="partySize" id="partySize" value={partySize} />
                                    {inputFlag === true && partySize === "" ? <Alert color="warning">Please enter numbers!</Alert> : null}
                                </Col>
                                <Col>
                                    <UncontrolledDropdown style={{ margin: '1rem' }}>
                                        <DropdownToggle caret>
                                            {tipPercent > "0" ? "Tip Selected: " + tipPercent + "%" : "Select Tip Amount"}
                                        </DropdownToggle>
                                        <DropdownMenu >
                                            <DropdownItem header>(in percentage %)</DropdownItem>
                                            <DropdownItem name="tipPercent" value="10" onClick={this.handleTipChange}>10</DropdownItem>
                                            <DropdownItem name="tipPercent" value="15" onClick={this.handleTipChange}>15</DropdownItem>
                                            <DropdownItem name="tipPercent" value="20" onClick={this.handleTipChange}>20</DropdownItem>
                                            <DropdownItem name="tipPercent" value="25" onClick={this.handleTipChange}>25</DropdownItem>
                                            <DropdownItem name="tipPercent" value="30" onClick={this.handleTipChange}>30</DropdownItem>
                                            <DropdownItem name="tipPercent" value="35" onClick={this.handleTipChange}>35</DropdownItem>
                                            <DropdownItem name="tipPercent" value="40" onClick={this.handleTipChange}>40</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Col>
                                <Col><Button style={{ marginTop: '1rem' }} type="submit" onClick={this.handleFormSubmit}>Calculate Tip </Button></Col>
                            </Card>
                        </Form>
                        <Col style={{ color: 'White', fontSize: '14pt', marginLeft: '.3rem' }}>
                            <CardTitle style={{ padding: '0 .5rem' }}>Calculated Tip</CardTitle>
                            <Row>
                                <Label style={{ padding: ' 0 .5rem' }}>Tip: </Label><CardText style={{ padding: '0 .5rem' }}>${calculatedTip}</CardText>
                            </Row>
                            <Row>
                                <Label style={{ padding: '0 . 5rem' }}>Total Bill: </Label><CardText style={{ padding: '0 .5rem' }}>${calculatedBill}</CardText>
                            </Row>
                            {partySize > 1 ?
                                <Row>
                                    <Label style={{ padding: '0 .5rem' }}>Per Card: </Label><CardText style={{ padding: '0 .5rem' }}>${perGuest}({perGuestBill}/{perGuestTip})</CardText>
                                </Row> : null

                            }
                        </Col>
                    </CardBody  >
                </Card>
            </Col >
        )
    }
}

export default TipCalculator;