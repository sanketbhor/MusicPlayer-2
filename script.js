var arr = [
    {songName:"Abrars Entry", url:"./Songs/Abrars Entry Jamal Kudu Animal 320 Kbps.mp3" ,image: "./Img/abrarsentry.jpg"},
    {songName:"Papa Meri Jaan", url:"./Songs/Papa.mp3", image:"./Img/papa.jpg"},
    {songName:"Pehle Bhi Mai" , url:"./Songs/Pehle.mp3", image:"./Img/animal.jpeg"},
    {songName:"Saari Duniya Jala Denge" , url:"./Songs/SaariDuniya.mp3", image:"./Img/Saari.jpg"},
];


var allsongs =document.querySelector("#all-songs");
var audio  = new Audio();

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var selectedSong = 0;
var poster = document.querySelector("#left")

function list(){
    var clutter = "";
    arr.forEach(function(obj,index) {
        clutter += `
                        <div class="song-card" id=${index}>
                            <div class="part1">
                                    <img src=${obj.image} alt="">
                                    <h2>${obj.songName}</h2>
                                </div>
                            <h6>3.56</h6>
                        </div> 
                        `
});

allsongs.innerHTML = clutter;
audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].image})`
}
list()



allsongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1;
    list()
    audio.play()
})

var flag = 0 ;

play.addEventListener("click",function(){
    if ( flag == 0 ){
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    list();
    audio.play()
    flag = 1;
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        list();
        audio.pause()
        flag = 0;
    }
})


forward.addEventListener("click",function(){
    if(selectedSong <= arr.length - 2){
        selectedSong ++
        backward.style.opacity = `100%`
        list()
        audio.play()
    }else{
        forward.style.opacity = `50%`
    }
})


backward.addEventListener("click",function(){
    if(selectedSong >= 1){
        selectedSong --
        forward.style.opacity = `100%`
        list()
        audio.play()
    }else{
        backward.style.opacity = `50%`
    }
})