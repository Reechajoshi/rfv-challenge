import React from 'react';
import { useState, useEffect } from 'react';

  export default function Message() {
    const [backendMessage, fetchBackendMessage] = useState("");

    useEffect(() => {
        fetch('/api').then(
            response => response.text()
        ).then(
            data => {   
                console.log(data);
                fetchBackendMessage(data)
            }
        )
    }, []);
    async function handleClick(message: string) {
        try {
            const response = await fetch(`/api/${message}`, {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
              }
            });
      
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
      
            const result = await response.text();
            fetchBackendMessage(result);
          } catch (err) {
            console.log("Error updating data in server")
          }
      }
      

    return (
        <div>
            <h1>{backendMessage} </h1>
            <UpdateTextButton onClick={() => handleClick("Value")} />
        </div>
    )
  }

  function UpdateTextButton({  onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement>}) {
    return (
      <button onClick={onClick}>
        Click Me!
      </button>
    );
  } 