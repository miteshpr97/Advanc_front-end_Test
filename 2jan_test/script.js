let img  = document.getElementsByTagName("img");
for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click' , function(){
        let image = this;        
        image.classList.toggle('zoom');
        console.log(image)
    })
}