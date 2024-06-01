const callBtn = document.getElementById('call-btn');
const callScreen = document.getElementById('call-screen');
const hangoutBtn = document.getElementById('hangout-btn');
const callStatus = document.getElementById('call-status');
const callStatusIcon = document.getElementById('status-icon');
const ringingSound = new Audio('../sounds/ringing.mp3');
const muteBtn = document.getElementById('mute-btn')
const videoBtn = document.getElementById('video-btn');

let ringingTimeout;
ringingSound.loop = true;
try {
    const msgPool = document.getElementById('msg-pool');
} catch (err){
    throw err;
}

hangoutBtn.addEventListener('click', ()=> {
    callScreen.classList.add('hide-call')
    ringingSound.pause();
    clearTimeout(ringingTimeout);
    const time = new Date();
    const formattedTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    let callHestory = `<div class="call-hestory sent-call-hestory">
                            <div class="call-body">
                                <div class="call-icon"><i class="bi bi-telephone-outbound" ></i></div>
                                <div class="call-details">
                                    <span class="call-type">Voice Call</span>
                                    <div class="call-status">No Answer</div>
                                </div>
                            </div>
                            <span class="call-time">${formattedTime}</span>
                        </div>`;
    
    msgPool.innerHTML += callHestory;   
    msgPool.scrollTop = msgPool.scrollHeight;
});

callBtn.addEventListener('click', async () => {
    callScreen.classList.remove('hide-call');
    callStatus.innerHTML = "Connecting";
    callStatusIcon.innerHTML = '<i class="bi bi-telephone"></i>';
    
    ringingTimeout = setTimeout(()=>{
        callStatus.innerHTML = "Ringing ..."
        callStatusIcon.innerHTML = '<i class="bi bi-telephone-outbound" ></i>';
        ringingSound.play();
    },3000);
    setTimeout(()=>{
        ringingSound.pause();
        callStatus.innerHTML = "No Answer";
        callStatusIcon.innerHTML = '<i class="bi bi-telephone-x"></i>';
    },13000);
    setTimeout(()=> {
        callScreen.classList.add('hide-call');
        const time = new Date();
        const formattedTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        let callHestory = `<div class="call-hestory sent-call-hestory">
                                <div class="call-body">
                                    <div class="call-icon"><i class="bi bi-telephone-outbound" ></i></div>
                                    <div class="call-details">
                                        <span class="call-type">Voice Call</span>
                                        <div class="call-status">No Answer</div>
                                    </div>
                                </div>
                                <span class="call-time">${formattedTime}</span>
                            </div>`;
        
        msgPool.innerHTML += callHestory;  
        msgPool.scrollTop = msgPool.scrollHeight;                          
    }, 14000)
    
});


muteBtn.addEventListener('click', ()=> {
    if(muteBtn.innerHTML == '<i class="bi bi-mic-mute"></i>')
        muteBtn.innerHTML = '<i class="bi bi-mic"></i>';
    else
        muteBtn.innerHTML = '<i class="bi bi-mic-mute"></i>';

});
videoBtn.addEventListener('click', ()=> {
    if(videoBtn.innerHTML == '<i class="bi bi-camera-video-off"></i>')
        videoBtn.innerHTML = '<i class="bi bi-camera-video"></i>'
    else
        videoBtn.innerHTML = '<i class="bi bi-camera-video-off"></i>'
        
})