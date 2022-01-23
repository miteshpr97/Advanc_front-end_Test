var container = document.getElementById('container')
const search = async (search_query) => {
    const res = await fetch(`http://universities.hipolabs.com/search?country=${search_query}`);
    const data = await res.json();
    let table = document.createElement('table')
    table.style.marginTop = "20px"
    table.style.width = "100%"
    table.style.border = "2px solid black"
    table.style.borderCollapse = "collapse"
    let row = document.createElement('tr')
    row.style.height="50px"
    let col1 = document.createElement('th')
    col1.innerText = "country"
    col1.style.border = "1px solid black"
    col1.style.width = "10%"
    let col2 = document.createElement('th')
    col2.innerText = "Name of the university"
    col2.style.border = "1px solid black"
    col2.style.width = "30%"
    let col3 = document.createElement('th')
    col3.innerText = "Domains"
    col3.style.border = "1px solid black"
    col3.style.width = "10%"
    let col4 = document.createElement('th')
    col4.innerText = "Web_Pages"
    col4.style.border = "1px solid black"
    col4.style.width = "30%"
    row.append(col1, col2, col3, col4)
    table.append(row)
    container.append(table)
    data.forEach(element => {
        let country = element.country
        let name = element.name;
        let state = element.domains[0];
        let page = element.web_pages[0];
        let row = document.createElement('tr')
        row.style.height="50px"
    let col1 = document.createElement('td')
    col1.innerText = country
    col1.style.border = "1px solid black"
    col1.style.width = "10%"
    let col2 = document.createElement('td')
    col2.innerText = name
    col2.style.border = "1px solid black"
    col2.style.width = "30%"
    let col3 = document.createElement('td')
    col3.innerText = state
    col3.style.border = "1px solid black"
    col3.style.width = "10%"
    let col4 = document.createElement('td')
    col4.innerText = page
    col4.style.border = "1px solid black"
    col4.style.width = "30%"
    row.append(col1, col2, col3, col4)
    table.append(row)
    console.log(element)
    });
}
(async () => {
    try {
        const current_location = window.location.href;
        const url_obj = new URL(current_location);
        const search_query = url_obj.searchParams.get("search_query");
        if (search_query == null || search_query == "") {
            container.innerText = " search country"
            container.align="center"
            container.style.marginTop="30px"
        } else {
            search(search_query);
        }
    } catch (e) {
        console.log("Something messed up");
    }
})();