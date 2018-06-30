import React from 'react';

export function CheckData(props) {
    return(
        <section  className="container">
            <h1>Check Data </h1>
                
                <div>
                {
                    Object.keys(props.inputFields).map((inputKey) => 
                        <p key={inputKey} className={inputKey}>
                            <span>{inputKey}:  </span>
                            {props.inputFields[inputKey]}
                        </p>
                    )
                }
                
                </div>
        </section>
    );
}
