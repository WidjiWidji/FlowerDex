import React, { useState, useEffect } from 'react';
import Webcam from "react-webcam";
import FileUpload from "./fileUpload"
import axios from 'axios';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 1600,
    height: 900,
    facingMode: "user"
};

export const WebcamCapture = ({id}) => {

    //file upload
    const [selectedFile, setSelectedFile] = useState(null);
    const [isScreenShot, setIsScreenShot] = useState(false);
    const [isFilePicked, setIsFilePicked] = useState(false);

    const [image,setImage]=useState('');
    const [response, setResponse]=useState('')
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(isScreenShot)
        setImage(imageSrc)
        });

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    function DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',')
        const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

        const ia = new Uint8Array(byteString.length)
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i)

          return new Blob([ia], { type: mimeString })
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        const formData2 = new FormData();
        if (isScreenShot){
            const file = DataURIToBlob(image)
            formData2.append(
                "file",
                file,
                "image.jpg"
                );
            formData2.append('id', id)
        } else{
            formData2.append(
                "file",
                selectedFile,
                selectedFile.name
                );
            formData2.append('id', id)
        }
     
        
    const requestOptions = {
        method: 'POST',
        //headers: { 'Content-Type': 'multipart/form-data' }, // DO NOT INCLUDE HEADERS
        body: formData2
    };
        fetch('http://localhost:5000/uploadfile/', requestOptions)
        .then(response => response.json())
        .then(function (response) {
            console.log('response')
            console.log(response)
            });
    }

    useEffect(() => {
    }, [response]);


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={100}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={250}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div className='flex flex-col py-2'>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                        setIsScreenShot(false)
                    }}
                        className="btnOrange">
                        Uncapture Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        setIsScreenShot(true);
                        capture();
                    }}
                        className="btnOrange">Capture</button>
                }
                {/* <input className=' my-2' onClick={console.log("hi")}>Choose Image</input> */}
                <input type="file" onChange={changeHandler} accept=".jpeg, .png, .jpg" className='btnOrange my-2'/>
                <button className='btnGreen'  onClick={handleSubmit}>Upload Image</button>
            </div>
            <p className='font-bold'>{response}</p>
           
         
        </div>
    );
};