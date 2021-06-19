// Arquivo de 'cookies', usado para salvar dados dos cartoes e fazer a comunicacao entre os componentes

export function saveCardToCookie(cardID, cardData){
    document.cookie = cardID+"="+encodeURIComponent(cardData)+";SameSite=None; Secure";
}

export function listCookies() {     
    var theCookies = document.cookie.split(';');
    var aString = '';
    
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}

export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}