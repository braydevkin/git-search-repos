/* EX01 -> Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch*/

function checkOld(idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (idade >= 18) {
        resolve()
      }
      else if (idade < 18) {
        reject()
      }
    }, 2000)
  })
}
checkOld(20)
  .then(function () {
    console.log("Maior que 18")
  }
  )
  .catch(function () {
    console.log("Menor que 18")
  }
  )

//EX02 -> BUSCAR REPOSITÓRIOS NO GIT ATRAVÉS DO NOME DE USUÁRIO
//EX03 -> FAZER UM LOADING 
const inputElement = document.getElementById('user')
var panel = document.getElementById('panel')
const load = document.getElementById('conteiner-load')

function btnAdd() {
  load.style.visibility = 'visible'
  setTimeout(function () {
    if (inputElement.value == 0) {
      alert('Preencha o nome do usuário')
      inputElement.focus()
    } else {
      var user = inputElement.value
      axios.get('https://api.github.com/users/' + user + '/repos')

        .then(function (response) {
          load.style.display = 'none'
          inputElement.value = ''
          const ulElement = document.createElement('ul')
          //-------------------------------------------->
          var getData = response.data
          for (let getRepos of getData) {
            const divRepos = document.createElement('div')
            divRepos.setAttribute('class', 'repos')
            //----------------------------------------------> 
            const paragr = document.createElement('p')
            const paragrBtn = document.createElement('p')
            //---------------------------------------------->
            const liElement = document.createElement('li')
            //---------------------------------------------->
            const titleName = document.createElement('h1')
            titleName.setAttribute('class', 'titlemodel')
            //---------------------------------------------->
            const textDescription = document.createElement('span')
            //---------------------------------------------->
            const btnRepos = document.createElement('button')
            //---------------------------------------------->
            const reposName = getRepos.name
            const reposDescription = getRepos.description
            const linkRepos = getRepos.html_url
            //---------------------------------------------->
            const showName = document.createTextNode(reposName)
            const showDescription = document.createTextNode(reposDescription)
            const linkReposOpen = document.createTextNode(linkRepos)
            const showTextBtn = document.createTextNode('Abrir no GitHub')
            //---------------------------------------------->
            panel.appendChild(ulElement)
            ulElement.appendChild(liElement)
            liElement.appendChild(divRepos)
            divRepos.appendChild(paragr)
            //---------------------------------------------->
            paragr.appendChild(titleName)
            titleName.appendChild(showName)
            //---------------------------------------------->
            paragr.appendChild(textDescription)
            textDescription.appendChild(showDescription)
            //---------------------------------------------->
            textDescription.appendChild(paragrBtn)
            paragrBtn.appendChild(btnRepos)
            btnRepos.appendChild(showTextBtn)
            btnRepos.onclick = async function () {
              window.open(linkRepos)
            }
          }
        })
        .catch(function (error) {
          alert('Erro ao encontrar os repositórios deste usuário, tente novamente')
        })
    }
  }, 2000)

}


