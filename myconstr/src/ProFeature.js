import React from 'react';

export function ProFeature(props) {
    return function (props){

        if (props.pro) {
            return props.render()
        } else
        return (
            <h5 className="bg-warning text-white text-center">
                To jest możliwość tylko dla speców
            </h5>
        )
    }
}