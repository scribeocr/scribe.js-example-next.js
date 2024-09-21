import { useState } from 'react';
import scribe from 'scribe.js-ocr';

export default function Home() {
    const [ocrText, setOcrText] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [uploadMessage, setUploadMessage] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            performOcr(file);
        }
    };

    const performOcr = (file) => {
        setIsProcessing(true);
        setUploadMessage('Processing image, please wait...');

        scribe.extractText([file]).then((text) => {
          setOcrText(text);
          setIsProcessing(false);
          setUploadMessage('Image processed');
      }).catch(error => {
          console.error('Error:', error);
          setUploadMessage('Failed to process image');
          setIsProcessing(false);
      });
    };

    return (
        <div>
            <h1>OCR with Scribe.js</h1>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            {isProcessing ? (
                <p>{uploadMessage}</p>
            ) : (
                <>
                    <p>{uploadMessage}</p>
                    <textarea value={ocrText} rows="10" cols="80" readOnly />
                </>
            )}
        </div>
    );
}
