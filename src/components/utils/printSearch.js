import wkhtmltopdf from "wkhtmltopdf";
import jsPDF from "jspdf";
import { saveAs } from 'file-saver';

/* Sample:
<div id="root">
        <div style="background-color: rgb(18, 18, 18); margin-left: 0px; margin-right: 0px;">
            <div></div>
            <div style="display: flex; flex-direction: column; width: 100vw; height: 100vh; opacity: 1;">
                <div id="logo"
                    style="width: 98%; position: fixed; z-index: 100; height: 120px; display: flex; align-content: center; align-items: center; border-bottom: 1px solid rgb(112, 112, 112); 
                    background-color: rgb(0,0,0);">

                    <div style="margin-left: 20px; margin-top: 20px;">
                        <image src="logo2copy.svg" style="width: 60px; height: 80px; float: left; margin-right: 40px;"></image>
                        <div style="background-color: rgb(18, 18, 18); width: 600px; height: 56px; margin-left: 100px; margin-top: 32px; padding-top: 8px;">
                            <div style="font-size: 16px; color: rgb(188,188,188); margin-left: 10px">Wpisz dane o leku</div>
                            <div style="font-size: 20px; color: rgb(255,255,255); margin-top: 4px; margin-left: 10px;">Are</div>
                        </div>
                    </div>
                </div>
                <div style="margin-left: 160px; margin-top: 120px;">
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Arechin</b>
                        </div>tabl., 250 mg, 30 tabl.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Areplex</b>
                        </div>tabl. powl., 75 mg, 28 szt. (2 blist.po 14 szt.)
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Enarenal</b>
                        </div>tabl., 10 mg, 30 szt. (3 blist.po 10 szt.)
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Enarenal</b>
                        </div>tabl., 10 mg, 60 szt. (6 blist.po 10 szt.)
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Enarenal</b>
                        </div>tabl., 20 mg, 30 szt. (3 blist.po 10 szt.)
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Enarenal</b>
                        </div>tabl., 20 mg, 60 szt. (6 blist.po 10 szt.)
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Enarenal</b>
                        </div>tabl., 5 mg, 30 szt. (3 blist.po 10 szt.)
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Enarenal</b>
                        </div>tabl., 5 mg, 60 szt. (6 blist.po 10 szt.)
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Firmagon</b>
                        </div>proszek i rozpuszczalnik do sporządzania roztworu do wstrzykiwań, 120
                        mg, 2 fiol. z prosz. i 2 fiol. z rozp.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Firmagon</b>
                        </div>proszek i rozpuszczalnik do sporządzania roztworu do wstrzykiwań, 80
                        mg, 1 fiol. z prosz. i 1 amp-strz. rozp.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Ivares</b>
                        </div>tabl. powl., 5 mg, 56 szt.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Ivares</b>
                        </div>tabl. powl., 7.5 mg, 56 szt.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Marelim</b>
                        </div>tabletki dojelitowe, 180 mg, 120 tabl.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Marelim</b>
                        </div>tabletki dojelitowe, 360 mg, 120 tabl.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Pulsaren 20</b>
                        </div>tabl. powl., 20 mg, 30 szt.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Xarelto</b>
                        </div>tabl. powl., 15 mg, 14 szt.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Xarelto</b>
                        </div>tabl. powl., 15 mg, 42 szt.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Xarelto</b>
                        </div>tabl. powl., 20 mg, 14 szt.
                    </div>
                    <div
                        style="border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);">
                        <div style="pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);">
                            <b>Xarelto</b>
                        </div>tabl., 10 mg, 10 szt.
                    </div>
                </div>
            </div>
        </div>
    </div>*/

const printSearch = async (search, results) => {
    let raw = "<head><meta charset=\"utf-8\"></head>";
    raw += "<div id=\"root\">";
    raw += "<div style=\"background-color: rgb(18, 18, 18); margin-left: 0px; margin-right: 0px; font-family:arial\">";
    raw += "<div></div>";
    raw += "<div style=\"display: flex; flex-direction: column; width: 100vw; height: 100vh; opacity: 1;\">";
    raw += "<div id=\"logo\" style=\"width: 99%; position: fixed; z-index: 100; height: 120px; display: flex; align-content: center; align-items: center; border-bottom: 1px solid rgb(112, 112, 112); background-color: rgb(0,0,0);\">";
    raw += "<div style=\"margin-left: 20px; margin-top: 20px;\">";
    raw += "<image src=\"logo2copy.svg\" style=\"width: 60px; height: 80px; float: left; margin-right: 40px;\"></image>";
    raw += "<div style=\"background-color: rgb(18, 18, 18); width: 600px; height: 56px; margin-left: 100px; margin-top: 32px; padding-top: 8px;\">";
    raw += "<div style=\"font-size: 16px; color: rgb(188,188,188); margin-left: 10px\">Wpisz dane o leku</div>";
    raw += "<div style=\"font-size: 20px; color: rgb(255,255,255); margin-top: 4px; margin-left: 10px;\">"+search+"</div>";
    raw += "</div>";
    raw += "</div>";
    raw += "</div>";
    raw += "<div style=\"margin-left: 160px; margin-top: 120px; padding-top: 100px\">";
    results.forEach((result) => {
        raw += "<div style=\"border-radius: 20px; max-width: 712px; margin: 25px 0px 25px -25px; padding: 20px 25px; background-color: rgb(18, 18, 18); font-size: 20px; color: rgb(255,255,255);\">";
        raw += "<div style=\"pointer-events: none; line-height: 2; font-size: 24px; color: rgb(255, 193, 7);\">";
        raw += "<b>"+result.name+"</b>";
        raw += "</div>"+result.formDose + ", "+result.content;
        raw += "</div>";
    });
    raw += "</div>";
    raw += "</div>";
    raw += "</div>";
    raw += "</div>";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/html");
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };


    let response = await fetch("https://secret-shelf-20757.herokuapp.com/convert/html", requestOptions);
    //console.log(response);
    let responseData = await (await response.blob());
    var FileSaver = require('file-saver');
    FileSaver.saveAs(responseData, "test.pdf");

}

export default printSearch;