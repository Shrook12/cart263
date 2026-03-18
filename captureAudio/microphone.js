window.onload = getMicrophoneInput;

async function getMicrophoneInput() {
    console.log("here we are ");

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioContext = new AudioContext();//using the web audio library

    try {
        //returns a MediaStreamAudioSourceNode.
        let audioStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        })
        //pass the microphone input to the web audio API
        let microphoneIn = audioContext.createMediaStreamSource(audioStream);
        console.log(microphoneIn);
        const filter = audioContext.createBiquadFilter();
        const analyser = audioContext.createAnalyser();

        // microphone -> filter ->  analyzer->destination
        microphoneIn.connect(filter);
        //use the analyzer object to get some properties ....//analyse data to then vizualized.
        filter.connect(analyser);
    }
    catch (err) {
        /* handle the error */
        console.log("had an error getting the microphone");

    }

} 
