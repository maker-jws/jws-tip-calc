import React from 'react'
import {InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'
function IGItem (props) {
  return (
    <InputGroup >
                    {/* Should programmatically generate the inputGroup Text  */}
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Test Bill</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Total Bill" name="totalBill" value = {"test"} />
                  </InputGroup>
  )
}

export default IGItem