function fromJSONToHTMLTable(json) {
    let data = JSON.parse(json);
    let result = ['<table>'];

    // headers
    let headers = Object.keys(data[0]);
    result.push('<tr>' + headers.map(h => `<th>${escapeHTML(h)}</th>`).join('') + '</tr>');

    // rows
    for (let obj of data) {
        let row = headers.map(h => `<td>${escapeHTML(String(obj[h]))}</td>`).join('');
        result.push('<tr>' + row + '</tr>');
    }

    result.push('</table>');
    console.log(result.join('\n'));

    function escapeHTML(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/ /g, '&nbsp;');
    }
}


fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`);
