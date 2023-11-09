const slider = document.querySelector('.sliderImage')
    const photo = [
        "a.jpg",
        "b.jpg",
        "c.jpg",
        "d.jpg",
        "e.jpg"  
    ];

let counter = 0;

function previous(){
    if(counter <= 0) counter = photo.length;
    counter--;
    return setAttribute();
}

function next(){
    if(counter >= photo.length -1) counter  = - 1;
    counter++;
    return setAttribute();
}

function setAttribute(){
return slider.setAttribute('src', 'image/' +  photo[counter])
}



