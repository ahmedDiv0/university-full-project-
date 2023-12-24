const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const z = +counter.innerText

        const increment = target / 1000

        if(z < target){
            counter.innerText=`${Math.ceil(z+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target
        }
    }
    updateCounter() 
})  


