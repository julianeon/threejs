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
            <Link to="/gcb">Green Cubes Blue</Link>	    
	    </Spacer>
	    <Spacer>
            <Link to="/ycnr">Yellow Cone Red</Link>	    
	    </Spacer>
	    <br/>	    
	    <Spacer>
            <Link to="/torus">Torus</Link>	    
	    </Spacer>
	    <Spacer>
            <Link to="/diamonds">Diamonds</Link>	    
	    </Spacer>
	    <br/>	    	    
	    <Spacer>
            <Link to="/cylinder">Cylinder</Link>	    
	    </Spacer>
	    <Spacer>
            <Link to="/ring">Ring</Link>	    
	    </Spacer>
	    <br/>
	    <Spacer>
            <Link to="/diamondseries">Diamond Series</Link>	    
	    </Spacer>
	    <Spacer>
            <Link to="/heart">Heart Shape</Link>	    
	    </Spacer>
	    <br/>
	    <Spacer>
            <Link to="/lathe">Lathe</Link>	    
	    </Spacer>
	    <Spacer>
            <Link to="/tube">Tube</Link>	    
	    </Spacer>
	    </Wider>
	    </div>
	)
}

export default Splash;
