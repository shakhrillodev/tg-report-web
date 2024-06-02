window.addEventListener("load", ()=>{
    const telegram = window.Telegram.WebApp;
    telegram.ready()
    let data = telegram.initData;
    
    async function validateInitData(
        telegramInitData, BOT_TOKEN)
    {
      const initData = new URLSearchParams(telegramInitData);
      let dataToCheck;
    
      initData.sort();
      initData.forEach((val, key) => key !== 'hash' && dataToCheck.push(`${key}=${val}`));
    
      const secret = CryptoJS.HmacSHA256(BOT_TOKEN, 'WebAppData');
      const _hash = CryptoJS.HmacSHA256(dataToCheck.join("\n"), secret).toString(CryptoJS.enc.Hex);
    
      return _hash === initData.get('hash');
    }
    
    let token = "6557250135:AAHEZMI3Z0m3sEJ05ur4h5PpolRUvYIz01g"
    
    console.log(validateInitData(data, token));
})

