import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Here is out Terms & Conditions</h2>
            <p>Go back to Registration <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;