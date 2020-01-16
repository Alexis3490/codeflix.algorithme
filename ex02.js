function character_inverse(str = "") {

    let mot_inverser="";

    for (let index in str) {
        mot_inverser = str[index] +mot_inverser;
    }
    console.log(mot_inverser)
}
character_inverse("bonjour");