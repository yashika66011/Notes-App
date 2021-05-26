var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
var check = document.querySelector("#check");
var cross = document.querySelector("#cross");

var i=0;

function openNote() {
    if(!container3.classList.contains('show'))
        container3.classList.add('show');
    else
        container3.classList.remove('show');
}

cross.addEventListener("click", () => {
    container3.classList.remove('show');
})


check.addEventListener("click", () => {
    createNote();
})

function createNote() {
    const notes = document.querySelector("#notes");
    const note_body = document.createElement("div");
    const note_head = document.createElement("h1");

    note_head.innerHTML = notes.value;
    note_head.classList.add('head');
    note_head.style.margin = margin();
    note_head.style.transform = rotate();
    note_head.style.background = color();   

   note_body.appendChild(note_head);
   container2.appendChild(note_body);

    note_body.addEventListener("mouseenter",function(){
        note_body.style.transform = "scale(1.1)";
    })

    note_body.addEventListener("mouseleave",function(){
        note_body.style.transform = "scale(1)";
    })

    note_body.addEventListener("dblclick",function(){
        note_body.remove();
    })

    notes.value='';
}

function margin(){
    var marg=["-5px", "1px", "5px", "10px", "15px","20px"];
    return marg[Math.floor(Math.random()*marg.length)];
}

function rotate(){
    var rot=["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    return rot[Math.floor(Math.random()*rot.length)];
}

function color(){
    // var col=[ "#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022","#bc83e6","#ebb328"];
    var col = [ "red", "blue", "green"];
    if(i > col.length-1)
        i=0;
    return col[i++];
}