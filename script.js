const Link_button = document.querySelectorAll('.link_button');

function RemoveClass(){
    for(let i = 0; i < Link_button.length; i++){
        Link_button[i].classList.remove('link-active');
    }
}

Link_button.forEach(button => {
    button.addEventListener('click', function(){
        RemoveClass();
        if(!this.classList.contains('link-active')){
            this.classList.add('link-active');
        }
    });
});
