const title = document.getElementById('title')
const Switch = document.getElementById('switch')
const input = document.getElementById('input')
const convert = document.getElementById('convert')
const output = document.getElementById('output')
const outPlace = document.getElementById('outPlace')

Switch.addEventListener('click',()=>{
   const type = input.getAttribute('type')
  if(type=='text'){
      input.value =''
      output.nnerTiext=''
      input.setAttribute('type','binary')
      input.setAttribute('placeholder','Input Binary...')
   output.innerText ='Text output...'
   title.innerText='Binary to Text'
  }else{
    input.value =''
    output.innerText=''
    input.setAttribute('type','text')
    input.setAttribute('placeholder','Input Text...')
    output.innerText ='Binary output...'
    title.innerText='Text to Binary'
  }
}) 

convert.addEventListener('click',Convert)

function Convert(){
    const type = input.getAttribute('type')
    const inputValue = input.value;

    // alert(`${type} : ${inputValue}`)

    if(type == 'text'){
       textToBinary(inputValue)
    }else{
        binaryToText(inputValue)
    }
}


function  textToBinary(input){
    var out=''

  out =input.split('')
    .map(char => char.charCodeAt().toString(2)).join(' ')
    
output.innerText = out
}

function binaryToText(input){
    var out = ''

    out = input.split(' ')
    .map(bin => String.fromCharCode(parseInt(bin,2)))
    .join('')

    output.innerText = out
}