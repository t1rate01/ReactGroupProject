let token = null;

/*
export function setToken(newToken) {
    token = newToken;
}

export function getToken() {
    return token;
}

export function clearToken() {
    token = null;
}*/

// KOKEILE TOISELLA TAVALLA MITEN OHJELMA MIELESTÄSI TOIMII, KUMPI PAREMPI ?? 
// ALEMPI TYYLI TALLENTAA SELAIMEEN TOKENIN, JOTEN SE EI KATOA KUIN LOGOUTILLA TAI AJAN UMPEUTUESSA

export function setToken(newToken) {
    localStorage.setItem('token', newToken);
}

export function getToken() {
    return localStorage.getItem('token');
}

export function clearToken() {
    localStorage.removeItem('token');
}


// edellyttää että browserbar tarkistaa tokenin heti ja heittää menuun jos on tokeni voimassa