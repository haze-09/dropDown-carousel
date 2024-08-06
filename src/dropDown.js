function dropDown(){
    let button = document.querySelector('#dropdown');
    let dropDowns = document.querySelectorAll('.invisible');
    button.addEventListener('mouseenter',()=>{
        for(let item of dropDowns){
            item.classList.remove('invisible');
            item.classList.add('visible');

        }
    })
    button.addEventListener('mouseleave',()=>{
        for(let item of dropDowns){
            item.classList.add('invisible');
            item.classList.remove('visible');

        }
    })

}

export default dropDown;