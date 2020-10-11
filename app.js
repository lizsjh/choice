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
        content:'I am handling your request today. What can I do for you?'
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
        delay:700,
        loading: true,
        content:'I do not understand what you said. Can you choose one of the options below?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Check an order status',
            value: 'Check an order status'
          },
          { text: 'Return or exchange item(s)',
            value: 'Return or exchange item(s)'
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value);
        response.push(res.value);        
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'I can help you with that. First, could you tell me why you need to replace or return this textbook in more details?'
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
        delay:700,
        loading: true,
        content:'I did not quite get what you are saying. Please choose an option below.'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Damage in the item',
            value: 'Damage in the item'
          },
          { text: 'Incorrect item delivered',
            value: 'Incorrect item delivered'
          },
          { text: 'Need a different version/edition',
            value: 'Need a different version/edition'
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
        content:'Got it. Could you input your order number below?'
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
        delay:700,
        loading: true,
        content:'Alright. I will process your request. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:1500,
        loading: true,
        content:'The 3rd edition is currently in stock. For your information, you need to pay $50 more for the new edition, and the shipping will be free.'
    });
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Would you still like to exchange the book?'
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
        delay:700,
        loading: true,
        content:'I cannot process your message. Please select one.'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Yes, I would like an exchange',
            value: 'Yes, I would like an exchange'
          },
          { text: 'No, I do not want an exchange',
            value: 'No, I do not want an exchange'
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
        content:'I have processed your request. The issue is resolved.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text":JSON.stringify(response)}, "*");
};
