import React, { useState } from 'react';
import './literacy.css';
import Navbar from './components/navbar';
const LiteracyTest = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState('');
  const handleStartRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Your browser does not support audio recording.');
      return;
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    setRecorder(mediaRecorder);
    mediaRecorder.ondataavailable = (e) => {
      const url = URL.createObjectURL(e.data);
      setAudioURL(url);
    };
    mediaRecorder.start();
    setIsRecording(true);
  };
  const handleStopRecording = () => {
    recorder.stop();
    setIsRecording(false);
  };
  const handleSubmitRecording = () => {
    // Handle the recording submission logic here
    alert('Recording submitted successfully!');
    // You can implement actual submission logic here, like uploading the file to a server
  };
  const handleDeleteRecording = () => {
    setAudioURL('');
    alert('Recording deleted.');
  };
  return (
    <>
      <Navbar />
      <br /><br />
      <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Literacy Test</h1>
        <p className="mb-4">Read the following text aloud:</p>
        <p className="p-4 bg-white rounded border mb-4">
          This is a sample text for the literacy test. Please read this text aloud
          clearly and at a steady pace.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={handleStartRecording}
            disabled={isRecording}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Start
          </button>
          <button
            onClick={handleStopRecording}
            disabled={!isRecording}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop
          </button>
        </div>
        {audioURL && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Recording:</h2>
            <audio controls src={audioURL}></audio>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={handleSubmitRecording}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={handleDeleteRecording}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Delete Recording
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default LiteracyTest;
