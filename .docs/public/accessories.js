function narcissistic(value) {
    const num = value.toString().split('')
    const numLength = num.length
    const result = num.reduce((acc,cur)=> 
      (parseInt(cur))**numLength + acc)
    
    return result === value
}