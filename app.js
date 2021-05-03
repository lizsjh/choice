var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:500,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Missing item',
            value: 'Missing item' 
          },
          { text: 'Check order status',
            value: 'Check order status' 
          },
          { text: 'Return/exchange item(s)',
            value: 'Return/exchange item(s)'
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value); 
        response.push(res.value);   
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'I can help you with that. First, could you tell me your order number?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'Got it. Please allow me few seconds for pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:1200,
        loading: true,
        content:'Which item(s) is missing?'
    });
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'Meanwhile, is there anything else you need?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Express shipping ($15)',
            value: 'Express shipping ($15)' 
          },
          { text: 'Access to e-book',
            value: 'Access to e-book' 
          },
          { text: 'None',
            value: 'None'
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value); 
        response.push(res.value);   
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Okay. Please hold on for a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:1200,
        loading: true,
        content:'I have processed your request. An email will be sent shortly about your new order.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:700,
        loading: true,
        content:'The issue is resolved. Please contact us again if you need further assistance. Bye.'
    });
 });


function sendcomplete(){
    window.parent.postMessage({"message": "completed","text":response}, "*");
};
