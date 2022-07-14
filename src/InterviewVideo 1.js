// import React from 'react'
import logo from './logo.png';
import video from "./video.png"

import { useReactMediaRecorder } from "react-media-recorder";
import VideoRecorder from "react-video-recorder";
import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS
} from "react-record-webcam";
const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  width: 1920,
  height: 1080
};
const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: true,
    facingMode: { exact: "environment" }
  });

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

function InterviewQuestion1 () {

    const recordWebcam = useRecordWebcam(OPTIONS);
  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
  };

  const getRecordingFileRenderProp = async (blob) => {
    console.log({ blob });
  };


  return (
    <div>
        <div class="header">
        <di class="logo">
            <img src={logo} alt="Logo"/>
    
        </di>
    </div>
    
    <div class="contentbody">
        <div class="left" style={{width: "70%"}}>
        </div>
        <div class="right" style={{margin: "-80px 10%"}}>
            <p style={{color: "#ea5e11"}}>QUESTION 1</p><br/>
            <p>What hourly pay range are you expecting or looking for?</p>
            <div style={{width: "265px", border: "1px solid #dadada", height: "200px"}}>
                <video
                ref={recordWebcam.webcamRef}
                style={{
                display: `${
                    recordWebcam.status === CAMERA_STATUS.OPEN ||
                    recordWebcam.status === CAMERA_STATUS.RECORDING
                    ? "block"
                    : "none"
                }`, width: "265px"
                }}
                autoPlay
                muted
            />
            <video
                ref={recordWebcam.previewRef}
                style={{
                display: `${
                    recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
                }`, width: "265px"
                }}
                controls
            />
            </div>
            
            {/* <img src={video} alt="" style={{width: "265px"}}/> */}
            <div class="videocontrolbtns" style={{marginBottom: "20px"}}>
                    <button disabled={
                        recordWebcam.status === CAMERA_STATUS.OPEN ||
                        recordWebcam.status === CAMERA_STATUS.RECORDING ||
                        recordWebcam.status === CAMERA_STATUS.PREVIEW
                    }
                    onClick={recordWebcam.open}
                    >OPEN
                </button>
                <button 
                    disabled={
                        recordWebcam.status === CAMERA_STATUS.CLOSED ||
                        recordWebcam.status === CAMERA_STATUS.RECORDING ||
                        recordWebcam.status === CAMERA_STATUS.PREVIEW
                    }
                    onClick={recordWebcam.start}
                >Record</button>
                <button
                    disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
                    onClick={recordWebcam.stop} 
                >Stop</button>
                <button
                    disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                    onClick={recordWebcam.retake}
                >Retake</button>
                <button
                    disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                    onClick={recordWebcam.download}
                    >
                    Download
                </button>
            </div>
            <a href='interview-question-2' className="button" style={{width: "270px"}}>Continue</a>
        </div>
    </div>
    
    
    <footer>
        <div>
            WEB: <a href="#">www.REALVOICE.com</a>
        </div>
        <div>
            HELP DESK: <a href="tel:+">901-609-300</a>
        </div>
        <div>
            EMAIL: <a href="mailto:hr@realvoice.com">HR@REALVOICE.com</a>
        </div>
    </footer>
    </div>
  )
}

export default InterviewQuestion1;