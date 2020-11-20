import React, { useState } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const UploadForm = () =>{
    const category = [
        { key:1, text:'Vegetable', value:'Vegetable' },
        { key:2, text:'Fruit', value:'Fruit' }
    ]
    // const { admin } = useSelector(state => state.auth)
        return(
            <React.Fragment>
                        <Segment>
                            <Form>
                                <Form.Group>
                                    <Form.Input 
                                        label='Product Name'
                                        required
                                        placeholder='Product Name'
                                        width={4}
                                    />
                                    <Form.Input 
                                        label='Price'
                                        required
                                        type='number'
                                        placeholder='₹'
                                        min={0}
                                        width={4}
                                    />
                                    <Form.Select 
                                    required
                                    label='Category'
                                    options={category}
                                    placeholder='Select a category'
                                    />
                                    <Button 
                                    type='submit'
                                    placeholder='Upload'
                                    />
                                </Form.Group>
                            </Form>
                        </Segment>
                 
              
                
            </React.Fragment>   
           
        )
}

export default UploadForm