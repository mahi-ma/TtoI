"use client"

import React, { useState } from 'react';
import { Button, message } from 'antd';

//using huggingface diffusion model to convert text to image
const MODEL_NAME = "runwayml/stable-diffusion-v1-5"

const Home = () => {
  // state for taking input from user
  const [inputText, setInputText] = useState('');
  //state to set image from text to image model
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  //function call when user clicks submit button
  const handleSubmit = async () => {
    if (!inputText.trim()) {
      message.error('Please enter text');
      return;
    }

    setLoading(true);

    try {
      //api call to the text to image model
      const response = await fetch(`https://api-inference.huggingface.co/models/${MODEL_NAME}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN}`,
        },
        body: JSON.stringify({
          inputs: inputText.trim(),
        }),
      });

      if (!response) {
        throw new Error('Failed to fetch image');
      }

      //the model will return imaghe binary object
      const blob = await response.blob();
      //set the image to be viewed by user
      setImageUrl(URL.createObjectURL(blob));
    } catch (error) {
      //show error if anything fails
      console.error('Error fetching image:', error);
      message.error('Failed to fetch image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text..."
        style={{ width: '100%', marginBottom: '10px', minHeight: '100px' }}
      />
      <Button type="primary" onClick={handleSubmit} loading={loading}>
        Submit
      </Button>
      <div style={{ marginTop: '20px' }}>
        {imageUrl && (
          <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s', width: "50%" }}>
            <img src={imageUrl} alt="Generated Image" style={{ width: '100%', height: 'auto' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
