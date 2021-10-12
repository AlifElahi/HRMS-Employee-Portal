import React from 'react'
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoaderPage = () => {
    return (
        <div style={{justifyContent:'center',alignItems:'center',display:'flex', height:'100vh'}}>
            <RingLoader color='#E5A943' loading={true} css={override} size={70} /> 
        </div>
    )
}

export default LoaderPage
