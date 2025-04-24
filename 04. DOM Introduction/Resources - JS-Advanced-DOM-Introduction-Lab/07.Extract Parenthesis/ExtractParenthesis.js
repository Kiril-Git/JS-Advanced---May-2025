function extract(content) {


    let  el = document.getElementById(content);

    let regex = /\(([^()]+)\)/g

    let matches = el.textContent.matchAll(regex)

    let results = Array.from(matches)
        .map(el => el[1])
        .join('; ')

    return results;
}  