import React, { useState } from 'react'
import Sidebar from './Sidebar'
import UploadForm from './UploadForm'
import { Grid, Container } from 'semantic-ui-react'

const Dashboard = () =>{
        return(
            <Container style={{ marginLeft: 20 }}>
                <Grid>
                     <Grid.Column width={2}>
                        <Sidebar />
                     </Grid.Column>
                    <Grid.Column stretched width={12}>
                        <UploadForm />  
                    </Grid.Column>
                </Grid>
            </Container>   
           
        )
}

export default Dashboard