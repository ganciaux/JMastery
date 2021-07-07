import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png'

const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar postion="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" height="60"></img>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}></Grid>
                                <Posts></Posts>
                            <Grid item xs={12} sm={4}></Grid>
                            <Form></Form>
                        </Grid>
                    </Container>
                </Grow>
        </Container>
    );
}

export default App;