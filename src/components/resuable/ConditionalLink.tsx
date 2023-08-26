import React from 'react'
import { Link } from 'react-router-dom';


const ConditionalLink = ({ children, to, condition }:any) => (!!condition && to)
? <Link to={to}>{children}</Link>
: <>{children}</>;

export default ConditionalLink