const logIn = document.getElementById('login')
const modal = document.querySelector(".modal")
const body = document.querySelector(".body")

const wlocation = window.location.hash.slice(1)
console.log(wlocation)


const getProducts = async function(){
    
    try{
    const res = await fetch(`https://fakestoreapi.com/products/`)
    if(!res.ok) return
    const data = await res.json()
    console.log(data)
    }catch(err){
        console.log(err)
    }
}
getProducts()

// return masked string
function isPangram(string){
    return string.replace(/[a-z]/i)
  }
console.log(isPangram('abcd'))


function duplicateEncode(word){
    word = word.toLowerCase().split('');
    let wordCount = {}
    let result = []
    word.map(w =>{
       wordCount[w] ? wordCount[w] = ")"  : wordCount[w] = "("
    })

    word.map(w =>{
        result.push(wordCount[w])
    })
    console.log(wordCount)
    return result.join("")
}

console.log(duplicateEncode("Zzommbiee"))



