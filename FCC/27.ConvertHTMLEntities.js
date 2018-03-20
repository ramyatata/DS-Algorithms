/*  Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
 return str.replace(/&/g, '&amp;')
           .replace(/</g, '&lt;')
           .replace(/>/g, '&gt;')
 .replace(/'s/g, '&apos;s')
           .replace(/'/g, '&#39;')
           .replace(/"/g, '&quot;');
}

convertHTML("Dolce & Gabbana");

// o(n) = linear length of str
//space = constant