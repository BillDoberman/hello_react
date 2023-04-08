import './canvas.css';
import React, { useRef, useEffect, useState } from 'react'; 

function Canvas() {
    const canvasRef = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        // Draw on the canvas
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw on the canvas
            ctx.fillStyle = '#000';
            let x = Math.random() * canvas.width;
            ctx.fillRect(x,x,x,x);

            setCount(count => count + 1);
        }

        const interval = setInterval(draw, 1000);

        return () => clearInterval(interval);

    }, []);

    return(
        <canvas ref={canvasRef}></canvas>
    );
}

export default Canvas;