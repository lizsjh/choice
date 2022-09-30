var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:700,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:500,
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
        delay:800,
        loading: true,
        content:'I can help you with that. First, could you tell me why you need to replace or return this textbook?'
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
        content:'Got it. Please allow me few seconds for pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:1200,
        loading: true,
        content:'Which item(s) is missing?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Sweater',
            value: 'Sweater' 
          },
          { text: 'Jeans',
            value: 'Jeans' 
          },
          { text: 'Baseball cap',
            value: 'Baseball cap'
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value); 
        response.push(res.value);   
}).then(function(){
    return botui.message.add({
        delay:800,
        loading: true,
        content:'Can you describe conditions of the rest of the items?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'In a good condition',
            value: 'In a good condition' 
          },
          { text: 'Not in a good condition',
            value: 'Not in a good condition' 
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
        content:'Thank you for telling me. Meanwhile, I’ve identified the problem: there was a miscommunication in the packaging process.'
    });
}).then(function(){
    return botui.message.add({
        delay:1200,
        loading: true,
        content:'I can create a new order that will be delivered within a day, or I can refund for the missing item. What would you prefer?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Create a new order',
            value: 'Create a new order' 
          },
          { text: 'Refund',
            value: 'Refund' 
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
        content:'Alright. I will process your request. Please hold on for a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:1800,
        loading: true,
        content:'I have processed your request. The issue is resolved'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:900,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text":response}, "*");
};
