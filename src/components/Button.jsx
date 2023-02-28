import React from 'react'
import { Button as MuiButton } from "@mui/material"

export const Button = ({
    variant,
    action,
    children
}) => {
    if(variant == "primary"){
        variant = "text"
    } else if(variant == "secondary"){
        variant = "outlined"
    }

    return (
        <>

            <MuiButton variant={variant} onClick={action}>
                {children}
            </MuiButton>

            
        </>
    )
}
