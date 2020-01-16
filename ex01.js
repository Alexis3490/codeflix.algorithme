function character_unique(str = "")
{
    let text;
    let text_back;
    let value="unique";
    let message="";

   for(const index in str) {
       text = str.substr(index, 1);
       if (index !== 0) {
           text_back = str.substr(index - 1, 1);
           if (text === text_back) {
               value="not unique";
               message=`Le caractère ${text} n'est pas unique`;
               console.log(message);
          }
       }
   }
    if (value === "unique")
    {
        console.log("Tous les caractères sont uniques")
    }
}

character_unique("teest");