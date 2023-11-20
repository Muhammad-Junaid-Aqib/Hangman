import React from 'react';

const HEAD = (
    <div
    />
)

const HangmanDrawing = () => {
  return (
      <>
          <div style={{ position: "relative" }}>
              <div
            style={{
                height: "40px",
                width: "10px",
                background: "black",
                position: "absolute",
                top: 0,
                right: 0,
                
            }}>
            
        </div>
            <div
            style={{
                height: "10px",
                width: "200px",
                background: "black",
                marginLeft:"120px"
            }}>
            
        </div>
        <div
            style={{
                height: "400px",
                width: "10px",
                background: "black",
                marginLeft:"120px"
            }}>
            
        </div>
        <div
            style={{
                height: "10px",
                width: "250px",
                background: "black"
            }}>
            
              </div>
        </div>
    </>
  );
}

export default HangmanDrawing;
