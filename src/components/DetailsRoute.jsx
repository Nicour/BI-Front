import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const DetailsRoute = (props) => {
  const {component: Component, ...rest} = props;
  return (
    <>  
      <Route 
        render={(props) => {
          return <Component {...props}/>
        }}
        {...rest}
      />
    </>
   
  );
}
export default DetailsRoute;