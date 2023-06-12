import { CircularProgress, Fab, Tooltip } from "@mui/material";
import React from "react";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import printSearch from "./utils/printSearch";
import printSubstitutes from "./utils/printSubstitutes";
import Search from './Search';

const FabPDF = (props) => {
    const [clicked, setClicked] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const makePDF = async ()=> {
        if(!props.mode) {
            console.log("makePDF");
            let res = await props.results;
            console.log(props.search);
            console.log(res);
            await printSearch(props.search, res);
        } else {
            await printSubstitutes(props.original, props.substitutes, props.boxAmount);
        }
    }

    const handleOnClick = async () => {
        setDisabled(true);
        setClicked(true);
        await makePDF();
        setClicked(false);
        setDisabled(false);
    }

    return (
        <div style = {{
            position: "absolute",
            right: 25, top: 25,
        }}>
            {/*<Fade in = {!clicked} timeout={400}>*/}
            <Tooltip title="Export to PDF" onClick={(!disabled) ? handleOnClick : () => {}}>
                {!clicked ?
                <Fab size="large" color="secondary" aria-label="add">
                    <PictureAsPdfIcon/>
                </Fab>
                :
                <CircularProgress color = "secondary"/>}
            </Tooltip>
            {/*</Fade>*/}
        </div>
    );
}

export default FabPDF;