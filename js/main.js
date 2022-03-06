window.addEventListener('DOMContentLoaded', () => {
    const getResource = async () => {
        let res=await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"});
        if(!res.ok) throw new Error (`Could not fetch ${url}, status ${res.status}`);
        return await res.json();
    }
    const title=document.querySelector('.title');
    const quote=document.querySelector('.quote');
    const btn=document.querySelector('.dice');
    function setData(data) {
        console.log(data);
        title.textContent='advice #'+data.id;
        quote.textContent=data.advice;
    }
    btn.addEventListener('click', () => {
        getResource().then(data => setData(data.slip));
    })
})