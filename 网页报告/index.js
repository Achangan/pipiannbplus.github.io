
    var index = 1;
    auto();
    function auto() {
    var slides = document.getElementsByClassName('slide0')
    for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
}
    index++;
    if(index > slides.length){
    index = 1;
}
    slides[index - 1].style.display="none";
    setTimeout(auto,1000);
}