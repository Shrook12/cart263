window.onload = getMicrophoneInput;

async function getMicrophoneInput() {
    console.log("here we are ");

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioContext = new AudioContext();  //using the web audio library
    try {
        let audioStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        // console.log(audioStream)
        //pass the microphone input to the web audio API
        let microphoneIn = audioContext.createMediaStreamSource(audioStream);
        const filter = audioContext.createBiqadFilter();
        const analyser = audioContext.createAnalyer();

        microphoneIn.connect(filter);

        filter.connect(analyser);
        analyser.fftSize = 32;
        let frequencyData = new Uint8Array(analyser.frequencyBinCount);

        //call loop ...
        requestAnimationFrame(animateFrequencies);
        /****our looping callback function */
        function animateFrequencies() {
            analyser.getByteFrequencyData(frequencyData);
            let average = 0;
            let sum = 0;

            for (let i = 0; i < frequencyData.length; i++) {
                sum += frequencyData[i];
            }
            average = sum / frequencyData.length;
            console.log(average);
            requestAnimationFrame(animateFrequencies);

        }
    } catch (err) {
        console.log("had an error getting the microphone");
    }
}