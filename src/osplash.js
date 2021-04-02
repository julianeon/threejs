import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const Spacer = styled.div`
    padding-top: 1vh;
    padding-left: 1vw;
`

const Wider = styled.div`
    width: 180px;
`

const Splash = () => {
    return (
	    <div>
	    <Wider>
	    <Spacer>
            <Link to="/gcb"><Button fluid content="Green Cubes Blue" basic color='green' ></Button></Link>	    
	    </Spacer>
	    </Wider>
	    </div>
	)
}

export default Splash;
