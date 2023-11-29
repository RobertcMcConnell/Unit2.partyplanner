let Events = []
const list = document.querySelector(".list")

function render() {
    const html = Events.map((event) => {
        return `
            <h3>${event.name}</h3>
            <h4>${event.description}
        `
    })
    
    list.innerHTML = html.join(' ')
}

async function fetchEvents() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    console.log(response)
    const data = await response.json()
    Events = data.data
    console.log(Events)
    render()

}

fetchEvents()