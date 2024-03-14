const TG = require('telegram-bot-api')
module.exports = {
    sendNotification: function(msg) {
    
    const api = new TG({token: '6749696439:AAHNVsMuP3Dpkr2-Ops3Q1tbphDt0IuBLMs'})

    const mp = new TG.GetUpdateMessageProvider()

    api.setMessageProvider(mp)
    api.start()
    .then(() => {
        // console.log('API is started')
    })
    .catch(console.err)

    // for my debugging purpose
    // api.on('update', update => {
    //     console.log(update)
    // })

    api.sendMessage({
        chat_id: -1002070879677,
        text: msg,
        parse_mode: 'HTML'
    })

    api.stop()
}
}