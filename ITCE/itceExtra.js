var prev = ['SUMMER2022','SUMMER2022V2','summer2022','summer2022V2']
removePrev(prev)
function getSemesterName() {
    return 'FALL2022'
}

function getSemesterName() {
    return 'FALL2022'
}

function getDataURL() {
    return 'https://gitcdn.link/cdn/nur-zaman/forCDN/main/ITCE/data/FALL2022.json'
}

function removePrev(prev) {
    prev.forEach(i => {
        try {
            localStorage.removeItem(i);
         
        } catch (error) {
            console.log(error);
        }
    });
}
