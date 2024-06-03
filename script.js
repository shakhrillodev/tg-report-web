window.addEventListener("load", ()=>{
    const telegram = window.Telegram.WebApp;
    telegram.ready()
    let data = telegram.initData;
    let body = document.querySelector('body')
    body.innerHTML = data
    // async function getData(){
    //   const res = await fetch("http://127.0.0.1:3000", {
    //     headers: {
    //       Authorization: `tma ${data}`
    //     }
    //   })
    //   console.log(res);
    // }
    // getData()
})
