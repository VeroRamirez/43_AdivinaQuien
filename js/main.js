$(document).ready(function(){
    
    var mexico=[];
    var alumna=[];
    
    alumna["nombre"]="Natasha";
    alumna["foto"]="alumna1.jpg";
    mexico.push(alumna);
    
    var alumna2=[];
    alumna2["nombre"]="Edith";
    alumna2["foto"]="alumna2.jpg";
    mexico.push(alumna2);
    
    var alumna3=[];
    alumna3["nombre"]="Valeria";
    alumna3["foto"]="alumna1.jpg";
    mexico.push(alumna3);
    
    var alumna4=[];
    alumna4["nombre"]="Karen";
    alumna4["foto"]="alumna2.jpg";
    mexico.push(alumna4);
    
    var alumna5=[];
    alumna5["nombre"]="Vero";
    alumna5["foto"]="alumna1.jpg";
    mexico.push(alumna5);
    
    posicion=getRandom(0,5);
    console.log(getRandom(0,5));
    console.log(mexico[posicion]["foto"]);
    
    
    $('#idFoto').attr('src',("img/"+mexico[posicion]["foto"]));
    
    
    function getRandom(min, max){ //maximo excluido
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    $()
    
    /*
    function Alumna(nombre,foto){
        this.nombre = nombre;
        this.foto = foto;
        
        this.getNombre=function(){
            return this.nombre;
        }
        this.getFoto=function(){
            return this.foto;
        }
    
    
    var alumna1=new Alumna("Rihanna","alumna1.jpg");
    var alumna2=new Alumna("Edith","alumna1.jpg");
    
    var alumna = new Object();
    alumna.nombre = "Ford";
    alumna.modelo = "Mustang";
    alumna.año = 1969;
    
    $('#idFoto').hover(function(){
        $('#idCapaImg').removeClass('capa-img');
    },function(){$('#idCapaImg').addClass('capa-img');});
    }*/
});