const usuarios = [
    {
        login: 'victor',
        pass: 'victor'
    },
    {
        login: 'ana',
        pass: 'ana'
    }, {
        login: 'adm',
        pass: 'adm'
    }
]

let botao = document.getElementById('logar')

botao.addEventListener('click', function logar() {

    let pegausuario = document.getElementById('usuario').value
    let pegasenha = document.getElementById('senha').value

    let validalogin = false

    for (let i in usuarios) {

        if (pegausuario == usuarios[i].login && pegasenha == usuarios[i].pass) {
            validalogin = true

            break

        }
    }

    if (validalogin == true) {
        alert('ok')

        location.href = '../Dashboard/Dashboard.html'
    } else {
        alert('usuario e senha invalida')
    }
})

