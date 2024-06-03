window.addEventListener("load", ()=>{
    const telegram = window.Telegram.WebApp;
    telegram.ready()
    let data = telegram.initData;
    async function getData(){
      const res = await fetch("http://127.0.0.1:3000", {
        headers: {
          Authorization: `tma ${initData}`
        }
      })
      console.log(res);
    }
    getData()
})
