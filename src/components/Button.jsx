import React from 'react'
import { Button as MuiButton } from "@mui/material"


export const Button = ({
    color,
    content,
    action
}) => {
    return (
        <>

            <MuiButton color={color} onClick={action}>
                <p>{content}</p>
            </MuiButton>

        </>
    )
}
