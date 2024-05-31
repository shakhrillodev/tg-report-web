window.addEventListener("load", ()=>{
    const telegram = window.Telegram.WebApp;
    telegram.ready()
    console.log(JSON.stringify(telegram, null, 4));
})
