import { getCSS, tickConfig } from "./common.js"
async function vizualizarInformacoresGlobais() {
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
          x: nomeDasRedes,
          y: quantidadeUsuarios,
          type: 'bar',
        marker: {
            color: getCSS('--primary')
        }
    }]
    const layout = {
        plot_bgcolor: getCSS('--bg-color')
        ,paper_bgcolor: getCSS('--bg-color'),
        title: 
        {text: 'Redes sociais com mais usuários no mundo',
            x:0,
            font:{
                color: getCSS('--primary'),
                family: getCSS(' --font'),
                size: 30
            }
        },
        xaxis:{
            tickfont: tickConfig,
            title: {
                
                text: 'nome das redes sociais',
                font:{
                    color: getCSS('--secundaty-color')
                }
            }
        },
        yaxis:{
            title: {
                text: 'bilhões de usuários ativos',
                font:{
                    color: getCSS('--secundaty-color')
                }
            }
        }
    }
    const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-conteiner').appendChild(grafico)
Plotly.newPlot(grafico, data, layout)
}
vizualizarInformacoresGlobais()