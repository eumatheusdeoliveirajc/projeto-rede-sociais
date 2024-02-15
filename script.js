const Link_button = document.querySelectorAll('.link_button');
function RemoveClass(){
    for(let i = 0; i < Link_button.length; i++){
        Link_button[i].classList.remove('link-active');
    }
}
Link_button[0].addEventListener('click', function(){
    RemoveClass();
    if(this.classList != 'link-active'){
        this.classList.add('link-active');
    }
});
Link_button[1].addEventListener('click', function(){
    RemoveClass();
    if(this.classList != 'link-active'){
        this.classList.add('link-active');
    }
});
Link_button[2].addEventListener('click', function(){
    RemoveClass();
    if(this.classList != 'link-active'){
        this.classList.add('link-active');
    }
});
Link_button[3].addEventListener('click', function(){
    RemoveClass();
    if(this.classList != 'link-active'){
        this.classList.add('link-active');
    }
});
Link_button[4].addEventListener('click', function(){
    RemoveClass();
    if(this.classList != 'link-active'){
        this.classList.add('link-active');
    }
});
Link_button[5].addEventListener('click', function(){
    RemoveClass();
    if(this.classList != 'link-active'){
        this.classList.add('link-active');
    }
});