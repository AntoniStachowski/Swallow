import { saveAs } from 'file-saver';
/*Sample :
<head>
    <meta charset="utf-8">
</head>

<body style="">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <div style="background-color: rgb(18, 18, 18); margin-left: 0px; margin-right: 0px;">
            <p style="pointer-events: none; line-height: 2; font-size: 36px; color: rgb(233, 30, 99); align-content: center; align-items: center; text-align: center;"><b>Znalezione zamienniki</b></p>
            <p style="pointer-events: none; line-height: 2; font-size: 27px; color: rgb(255, 193, 7); margin-left: 60px;"><b>Wybrany lek</b></p>
            <table class="MuiTable-root css-1ixli0-MuiTable-root" style="color: rgb(255,255,255); margin-left: 20px; margin-right: 40px; border-spacing: 0px; font-size: 20px;">
                <thead class="MuiTableHead-root css-15wwp11-MuiTableHead-root" style="background-color: rgb(10,10,10); color: rgb(255,255,255); margin-top: 0px;">
                    <th style="padding: 16px; text-align: left; border-top-left-radius: 10px;font-weight: normal;"
                        scope="col" width="11.764705882352942%">Nazwa</th>
                    <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="17.647058823529413%">Postać i dawka</th>
                    <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="17.647058823529413%">Substancja czynna</th>
                    <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="17.647058823529413%">Zawartość opakowania</th>
                    <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="5.882352941176471%">Cena detaliczna</th>
                    <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="5.882352941176471%">Liczba pudełek</th>
                    <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="11.764705882352942%">Poziom refundacji</th>
                    <th style="padding: 16px; text-align: left; color: rgb(233, 30, 99); border-top-right-radius: 10px;font-weight: normal;"
                        scope="col" width="11.764705882352942%">Łączna cena</th>
                </thead>
                <tbody class="MuiTableBody-root css-apqrd9-MuiTableBody-root" style="background-color: rgb(48,48,48); color: rgb(255,255,255); padding-bottom: 48px;">
                    <tr class="MuiTableRow-root css-1ujhi33-MuiTableRow-root">
                        <td
                        style="padding: 16px; text-align: left; border-bottom-left-radius: 10px;">
                            <b>Xarelto</b></td>
                        <td
                        style="padding: 16px; text-align: left;">
                            <b>tabl. powl., 15 mg</b></td>
                        <td
                        style="padding: 16px; text-align: left;">
                            <b>Rivaroxabanum</b></td>
                        <td
                        style="padding: 16px; text-align: left;">
                            <b>14 szt.</b></td>
                        <td
                        style="padding: 16px; text-align: left;">
                            <b>74.95 zł</b></td>
                        <td
                        style="padding: 16px; text-align: left;">
                            <b>6</b></td>
                        <td
                        style="padding: 16px; text-align: left;">
                            <b>30%</b></td>
                        <td
                        style="padding: 16px; text-align: left; color: rgb(233, 30, 99); border-bottom-right-radius: 10px;">
                            <b>449.70 zł</b></td>
                    </tr>
                </tbody>
            </table>
            <p style="pointer-events: none; line-height: 2; font-size: 27px; color: rgb(255, 193, 7); margin-left: 60px;"><b>Zamienniki</b></p>
            <table class="MuiTable-root css-1ixli0-MuiTable-root" style="color: rgb(255,255,255); margin-left: 20px; margin-right: 40px; border-spacing: 0px; font-size: 20px; font-weight: bold;">
                <thead class="MuiTableHead-root css-15wwp11-MuiTableHead-root" style="background-color: rgb(10,10,10); color: rgb(255,255,255); margin-top: 0px; font-weight: normal;">
                    <th style="padding: 16px; text-align: left; border-top-left-radius: 10px; font-weight: normal;"
                        scope="col" width="18%">Nazwa</th>
                        <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="14%">Dawka</th>
                        <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="14%">Zawartość opakowania</th>
                        <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="12%">Cena detaliczna</th>
                        <th style="padding: 16px; text-align: left;font-weight: normal;"
                        scope="col" width="12%">Liczba pudełek</th>
                        <th style="padding: 16px; text-align: left; color: rgb(233, 30, 99); border-top-right-radius: 10px;font-weight: normal;"
                        scope="col" width="12%">Łączna cena</th>
                </thead>
                <tbody class="MuiTableBody-root css-apqrd9-MuiTableBody-root" style="color: rgb(255,255,255); padding-bottom: 48px;">
                    <tr class="MuiTableRow-root css-1ujhi33-MuiTableRow-root">
                        <td
                        style="padding: 16px; text-align: left; border-bottom-left-radius: 10px;">
                            Xarelto</td>
                            <td
                            style="padding: 16px; text-align: left;">
                            15 mg</td>
                            <td
                            style="padding: 16px; text-align: left;">
                            42 szt.</td>
                            <td
                            style="padding: 16px; text-align: left;">
                            207.52 zł</td>
                            <td
                            style="padding: 16px; text-align: left;">
                            2</td>
                            <td
                            style="padding: 16px; text-align: left; color: rgb(233, 30, 99); border-bottom-right-radius: 10px;">
                            415.04 zł</td>
                    </tr>
                    <tr class="MuiTableRow-root css-1ujhi33-MuiTableRow-root" style = "background-color: rgb(48,48,48);">
                        <td
                        style="padding: 16px; text-align: left; border-bottom-left-radius: 10px;">
                            Xarelto</td>
                            <td
                            style="padding: 16px; text-align: left;">
                            15 mg</td>
                            <td
                            style="padding: 16px; text-align: left;">
                            42 szt.</td>
                            <td
                            style="padding: 16px; text-align: left;">
                            207.52 zł</td>
                            <td
                            style="padding: 16px; text-align: left;">
                            2</td>
                            <td
                            style="padding: 16px; text-align: left; color: rgb(233, 30, 99); border-bottom-right-radius: 10px;">
                            415.04 zł</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</body>*/

const printSubstitutes = async (original, subs, boxAmount) => {
    let color = false;
    let raw = "<head><meta charset=\"utf-8\"><\head>";
    raw += "<body style=\"\">";
    raw += "<noscript>You need to enable JavaScript to run this app.</noscript>";
    raw += "<div id=\"root\" style=\"font-family:arial\">";
    raw += "<div style=\"background-color: rgb(18, 18, 18); margin-left: 0px; margin-right: 0px;\">";
    raw += "<p style=\"pointer-events: none; line-height: 2; font-size: 36px; color: rgb(233, 30, 99); align-content: center; align-items: center; text-align: center;\"><b>Znalezione zamienniki</b></p>";
    raw += "<p style=\"pointer-events: none; line-height: 2; font-size: 27px; color: rgb(255, 193, 7); margin-left: 60px;\"><b>Wybrany lek</b></p>";
    raw += "<table class=\"MuiTable-root css-1ixli0-MuiTable-root\" style=\"color: rgb(255,255,255); margin-left: 20px; margin-right: 40px; border-spacing: 0px; font-size: 20px;\">";
    raw += "<thead class=\"MuiTableHead-root css-15wwp11-MuiTableHead-root\" style=\"background-color: rgb(10,10,10); color: rgb(255,255,255); margin-top: 0px;\">";
    raw += "<th style=\"padding: 16px; text-align: left; border-top-left-radius: 10px;font-weight: normal;\" scope=\"col\" width=\"11.764705882352942%\">Nazwa</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"17.647058823529413%\">Postać i dawka</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"17.647058823529413%\">Substancja czynna</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"17.647058823529413%\">Zawartość opakowania</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"5.882352941176471%\">Cena detaliczna</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"5.882352941176471%\">Liczba pudełek</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"11.764705882352942%\">Poziom refundacji</th>";
    raw += "<th style=\"padding: 16px; text-align: left; color: rgb(233, 30, 99); border-top-right-radius: 10px;font-weight: normal;\" scope=\"col\" width=\"11.764705882352942%\">Łączna cena</th>";
    raw += "</thead>";
    raw += "<tbody class=\"MuiTableBody-root css-apqrd9-MuiTableBody-root\" style=\"background-color: rgb(48,48,48); color: rgb(255,255,255); padding-bottom: 48px;\">";
    raw += "<tr class=\"MuiTableRow-root css-1ujhi33-MuiTableRow-root\">";
    raw += "<td style=\"padding: 16px; text-align: left; border-bottom-left-radius: 10px;\"><b>" + original.name + "</b></td>";
    raw += "<td style=\"padding: 16px; text-align: left;\"><b>" + original.formDose + "</b></td>";
    raw += "<td style=\"padding: 16px; text-align: left;\"><b>" + original.activeIngredient + "</b></td>";
    raw += "<td style=\"padding: 16px; text-align: left;\"><b>" + original.content + "</b></td>";
    raw += "<td style=\"padding: 16px; text-align: left;\"><b>" + original.upcharge + "</b></td>";
    raw += "<td style=\"padding: 16px; text-align: left;\"><b>" + original.boxAmount + "</b></td>";
    raw += "<td style=\"padding: 16px; text-align: left;\"><b>" + original.refund + "</b></td>";
    raw += "<td style=\"padding: 16px; text-align: left; color: rgb(233, 30, 99); border-bottom-right-radius: 10px;\"><b>" + (boxAmount * parseFloat(original.upcharge)).toFixed(2) + "</b></td>";
    raw += "</tr>";
    raw += "</tbody>";
    raw += "</table>";
    raw += "<p style=\"pointer-events: none; line-height: 2; font-size: 27px; color: rgb(255, 193, 7); margin-left: 60px;\"><b>Zamienniki</b></p>";
    raw += "<table class=\"MuiTable-root css-1ixli0-MuiTable-root\" style=\"color: rgb(255,255,255); margin-left: 20px; margin-right: 40px; border-spacing: 0px; font-size: 20px; font-weight: bold;\">";
    raw += "<thead class=\"MuiTableHead-root css-15wwp11-MuiTableHead-root\" style=\"background-color: rgb(10,10,10); color: rgb(255,255,255); margin-top: 0px; font-weight: normal;\">";
    raw += "<th style=\"padding: 16px; text-align: left; border-top-left-radius: 10px; font-weight: normal;\" scope=\"col\" width=\"18%\">Nazwa</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"14%\">Dawka</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"14%\">Zawartość opakowania</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"12%\">Cena detaliczna</th>";
    raw += "<th style=\"padding: 16px; text-align: left;font-weight: normal;\" scope=\"col\" width=\"12%\">Liczba pudełek</th>";
    raw += "<th style=\"padding: 16px; text-align: left; color: rgb(233, 30, 99); border-top-right-radius: 10px;font-weight: normal;\" scope=\"col\" width=\"12%\">Łączna cena</th>";
    raw += "</thead>";
    raw += "<tbody class=\"MuiTableBody-root css-apqrd9-MuiTableBody-root\" style=\"color: rgb(255,255,255); padding-bottom: 36px;\">";
    let lastSub = null;
    if (subs.length > 0) {
        lastSub = subs[subs.length - 1];
        subs[subs.length - 1] = null;
    }


    subs.forEach((sub) => {
        if(sub == null) {
            sub = lastSub;
            raw += "<tr class=\"MuiTableRow-root css-1ujhi33-MuiTableRow-root\"" + (color? " style = \"background-color: rgb(48,48,48);\"" : "")  +">";
            raw += "<td style=\"padding: 16px; text-align: left; border-bottom-left-radius: 10px;\">" + sub.substitute.name + "</td>";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + sub.substitute.dose + " " + sub.substitute.unit + "</td>";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + sub.substitute.content +  "</td>";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + sub.substitute.upcharge + "</td>";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + parseInt(sub.substitute.boxAmount) + "</td>";
            raw += "<td style=\"padding: 16px; text-align: left; color: rgb(233, 30, 99); border-bottom-right-radius: 10px;\">" + parseFloat(sub.price).toFixed(2) + "</td>";
            raw += "</tr>";
        } else {
            raw += "<tr class=\"MuiTableRow-root css-1ujhi33-MuiTableRow-root\"" + (color? " style = \"background-color: rgb(48,48,48);\"" : "")  +">";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + sub.substitute.name + "</td>";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + sub.substitute.dose + " " + sub.substitute.unit + "</td>";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + sub.substitute.content +  "</td>";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + sub.substitute.upcharge + "</td>";
            raw += "<td style=\"padding: 16px; text-align: left;\">" + parseInt(sub.substitute.boxAmount) + "</td>";
            raw += "<td style=\"padding: 16px; text-align: left; color: rgb(233, 30, 99);\">" + parseFloat(sub.price).toFixed(2) + "</td>";
            raw += "</tr>";
        }
        color = !color;
    });
    raw += "</tbody>";
    raw += "</table>";
    raw += "</div>";
    raw += "</div>";
    raw += "</body>";


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

export default printSubstitutes;