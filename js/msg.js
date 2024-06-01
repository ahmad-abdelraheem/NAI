const msg = document.getElementById('new-msg');
const sendBtn = document.getElementById('send-btn');
const msgPool = document.getElementById('msg-pool');

sendBtn.addEventListener('click', () => {
    if(msg.value.length > 0){    
        const time = new Date();
        const formattedTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        let newMsg = `  <div class="msg sent-msg">
        <span class="msg-content">${msg.value}</span>
        <span class="msg-time">${formattedTime}</span>
        </div>`;
        msgPool.innerHTML += newMsg;
        msg.value = "";
        msg.focus();
        msgPool.scrollTop = msgPool.scrollHeight;
    }
});

msg.addEventListener('keypress', (event) => {
    if(event.key == 'Enter' && msg.value.length > 0){
        const time = new Date();
        const formattedTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const timeString =  time.getHours() > 12? 
                            `${time.getHours()%12}:${time.getMinutes()}PM`:
                            `${time.getHours()}:${time.getMinutes()}AM`;
        let newMsg = `  <div class="msg sent-msg">
                        <span class="msg-content">${msg.value}</span>
                        <span class="msg-time">${formattedTime}</span>
                    </div>`;
        msgPool.innerHTML += newMsg;
        msg.value = "";
        msg.focus();
        msgPool.scrollTop = msgPool.scrollHeight;
    }
});
/*
0 = 12 AM
1 = 1  AM
2 = 2 AM
3
4
5
6
7
8
9
10
11
12 = 12PM
13 = 1PM
14 = 2PM
15 = 3PM
16
17
18
19
20
21
22
23 = 11PM
*/