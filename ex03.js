function anagramme(str1= "", str2 = "") {

    let mot_inverser="";

    for (let index in str2) {
        mot_inverser = str2[index] +mot_inverser;
    }
    if(str1 === mot_inverser)
    {
        console.log("Les mot sont anagrammes")
    }
    else {
        console.log("Les mots ne sont pas anagrammes")
    }
}
anagramme("azert","treza");