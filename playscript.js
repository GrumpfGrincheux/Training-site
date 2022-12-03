function apply() {
    const height = document.querySelector("#height").value
    const width = document.querySelector("#width").value

    const container = document.querySelector(".container")
    container.style = `width: ${width}px;
                       height: ${height}px;`
}

