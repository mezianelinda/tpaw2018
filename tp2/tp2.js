

function validation(){
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var date = document.getElementById("date").value;
    var adresse = document.getElementById("adresse").value;
    var mail = document.getElementById("mail").value;


    if (nom == ""){
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
        document.getElementById("error").removeAttribute("hidden");        
    }else if(document.getElementById("nom").value.length < 5){
        document.getElementById("error").innerHTML = "Le nom doit comporté au moins 5 caractères";
        document.getElementById("error").removeAttribute("hidden");        
    }


    else if (prenom == ""){
        document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
        document.getElementById("error").removeAttribute("hidden");        
    }else if(document.getElementById("prenom").value.length < 5){
        document.getElementById("error").innerHTML = "Le prénom doit comporté au moins 5 caractères";
        document.getElementById("error").removeAttribute("hidden");       
    }


    else if (date == ""){
        document.getElementById("error").innerHTML = "La saisie de votre date de naissance est obligatoire";
        document.getElementById("error").removeAttribute("hidden");
    }

    else if (adresse == ""){
        document.getElementById("error").innerHTML = "La saisie de votre adresse est obligatoire";
        document.getElementById("error").removeAttribute("hidden");
    }else if(document.getElementById("adresse").value.length < 5){
        document.getElementById("error").innerHTML = "L'adresse doit comporté au moins 5 caractères";
        document.getElementById("error").removeAttribute("hidden");      
    }

    else if (mail == ""){
        document.getElementById("error").innerHTML = "La saisie d'un mail valide est obligatoire";
        document.getElementById("error").removeAttribute("hidden");
    }else if(document.getElementById("mail").value.length < 5){
        document.getElementById("error").innerHTML = "L'adresse mail doit comportée au moins 5 caractères";
        document.getElementById("error").removeAttribute("hidden");  
    }

    
    else{
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value +" "+ document.querySelector("#prenom").value;
        document.getElementById("error").setAttribute("hidden","hidden");
        document.getElementById("resultat").removeAttribute("hidden");
    }
}