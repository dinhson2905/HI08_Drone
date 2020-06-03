import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AnimateKeyframes } from "react-simple-animate";
import { Tooltip, withStyles } from "@material-ui/core"
import LocationInfor from "./LocationInfor"


function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const divStyle = {
    display: "inline-block",
    width: 30,
    height: 30,
    borderRadius: "10px",
    backgroundImage: 'url(https://www.freelogodesign.org/file/app/client/thumb/8c17d51d-6669-4095-be07-f1f9fcc26d66_200x200.png?1591024515687)',
    backgroundSize: '30px 30px',

};

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);


export default function Deposits(props) {
    const classes = useStyles();
    function on_click(){
        props._on_drone_click(props.drone.id)
    }
    return (
        <AnimateKeyframes 
            style={{display:"inline-block"}}
            play={true}
            iterationCount="infinite"
            duration={45}
            delay={0}
            keyframes={props.drone.keyframes}
        >
            <HtmlTooltip
                title={
                    <LocationInfor drone = {props.drone}/>
                }
                placement="right"
            >
                <div style={divStyle} onClick={on_click} />
            </HtmlTooltip>
        </AnimateKeyframes>
    );
}