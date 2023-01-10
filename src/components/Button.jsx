import React from 'react'

export const Button = () => {
    const downloadBtn = () => {
fetch('Abhilash_Kumar_Debata_4.pdf').then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Abhilash_Kumar_Debata_4.pdf';
        alink.click();
        })
    })
    }
  return (
    <div className='btnDiv'>
        <button id='downloadBtn' onClick={downloadBtn}>Download</button>
    </div>
  )
}
