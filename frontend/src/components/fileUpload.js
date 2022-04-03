import React, {useState} from 'react';
import axios from 'axios';
import FormData from 'form-data'

export default function FileUpload ( ) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
  
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };
    
    const handleSubmit = event => {
      event.preventDefault();
      const formData2 = new FormData();
      formData2.append(
        "file",
        selectedFile,
        selectedFile.name
      );
      
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
    return (  <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
              <input name="image" type="file" onChange={changeHandler} accept=".jpeg, .png, .jpg"/>
          </fieldset>
          <button onClick={handleSubmit}>Save</button>
        </form>
    </div>
  );
}
