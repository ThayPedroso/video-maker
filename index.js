const robots = {
    input: require('./robots/input.js'),
    text: require('./robots/text.js'),
    state: require('./robots/state.js'),
    image: require('./robots/image.js')
}

async function start(){
// Depois da primeira iteração, pode desabilitar as duas linhas abaixo para evitar passar pelo watson e outros
//    robots.input()
//    await robots.text()
    await robots.image()
    //console.log(JSON.stringify(content, null, 4))
    const content = robots.state.load()
    console.dir(content, { depth: null })
}
start()