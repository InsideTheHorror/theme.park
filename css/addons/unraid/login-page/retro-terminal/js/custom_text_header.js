
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
         _                 __  __                 _     __
   _____(_)_______  ____  / / / /___  _________ _(_)___/ /
  / ___/ /_  /_  / / __ \/ / / / __ \/ ___/ __ `/ / __  / 
 / /  / / / /_/ /_/ /_/ / /_/ / / / / /  / /_/ / / /_/ /  
/_/  /_/ /___/___/\____/\____/_/ /_/_/   \__,_/_/\__,_/   
                                                            
                                                          
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
