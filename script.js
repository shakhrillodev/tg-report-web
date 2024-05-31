window.addEventListener("load", ()=>{
    const telegram = window.Telegram.WebApp;
    telegram.ready()
    console.log(telegram.initData);
})
