// Arquivo de 'cookies', usado para salvar dados dos cartoes e fazer a comunicacao entre os componentes

export function saveCookie(cardID, cardData){
    document.cookie = cardID+"="+encodeURIComponent(cardData)+";SameSite=None; Secure";
}

export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}