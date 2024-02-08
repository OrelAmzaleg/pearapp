import React, { useRef, useEffect, useState } from 'react';
import { Button, Box, Flex, Text } from '@chakra-ui/react';

const SignatureComponent = ({ titleColor, onSave }) => {
  const canvasRef = useRef(null);
  let isDrawing = false;
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        console.log("IP Address:", data.ip); // Debugging
        setIpAddress(data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
        // Handle error (e.g., set default IP or disable saving)
      });

    // ... canvas setup ...
  }, []);

  const saveSignature = () => {
    if (canvasRef.current && ipAddress) {
      const signature = canvasRef.current.toDataURL();
      const timestamp = new Date().toISOString();
      console.log("Saving data:", { signature, timestamp, ipAddress }); // Debugging
      onSave({ signature, timestamp, ipAddress });
    } else {
      console.log("IP Address not set yet."); // Debugging
    }
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set up canvas properties
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    // Start drawing
    const startDrawing = (e) => {
      isDrawing = true;
      draw(e);
    };

    // Draw
    const draw = (e) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = getMousePos(canvas, e);
      context.lineTo(offsetX, offsetY);
      context.stroke();
    };

    // Stop drawing
    const stopDrawing = () => {
      isDrawing = false;
      context.beginPath();
    };

    // Get Mouse Position
    const getMousePos = (canvas, evt) => {
      const rect = canvas.getBoundingClientRect();
      return {
        offsetX: evt.clientX - rect.left,
        offsetY: evt.clientY - rect.top
      };
    };

    // Attach event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Clean up
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, []);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  
  

  return (
    <Flex direction="column" align="center" width="100%">
      <Text textAlign="center" color={titleColor} fontWeight="500" fontSize="xl" mt="4">
        Please Sign Below
      </Text>
      <Box border="1px solid black" lineHeight="0">
        <canvas ref={canvasRef} width={300} height={100} />
      </Box>
      <Button onClick={clearSignature} mt="2">Clear</Button>
      <Button onClick={saveSignature} mt="2">Save Signature</Button>
    </Flex>
  );
};

export default SignatureComponent;
