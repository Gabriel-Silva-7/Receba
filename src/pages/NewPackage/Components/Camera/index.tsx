import React, { useRef, useState } from 'react';

const CameraOrGallery: React.FC = () => {
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // const startCamera = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //     if (videoRef.current) {
  //       videoRef.current.srcObject = stream;
  //       videoRef.current.play();
  //     }
  //   } catch (err) {
  //     console.error('Erro ao acessar a câmera:', err);
  //     alert('Não foi possível acessar a câmera.');
  //   }
  // };

  // const takePhoto = () => {
  //   if (videoRef.current && canvasRef.current) {
  //     const video = videoRef.current;
  //     const canvas = canvasRef.current;
  //     const context = canvas.getContext('2d');

  //     if (context) {
  //       canvas.width = video.videoWidth;
  //       canvas.height = video.videoHeight;
  //       context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //       const image = canvas.toDataURL('image/png');
  //       setPhoto(image);
  //     }
  //   }
  // };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setPhoto(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        style={{
          cursor: 'pointer',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#DDD',
          color: '#000',
          marginBottom: '20px',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          display: 'flex',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        Anexe uma foto da encomenda
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M7.57148 3.29063L7.04336 4.875H3.25C1.45742 4.875 0 6.33242 0 8.125V21.125C0 22.9176 1.45742 24.375 3.25 24.375H22.75C24.5426 24.375 26 22.9176 26 21.125V8.125C26 6.33242 24.5426 4.875 22.75 4.875H18.9566L18.4285 3.29063C18.0984 2.29531 17.1691 1.625 16.118 1.625H9.88203C8.83086 1.625 7.90156 2.29531 7.57148 3.29063ZM13 9.75C14.2929 9.75 15.5329 10.2636 16.4471 11.1779C17.3614 12.0921 17.875 13.3321 17.875 14.625C17.875 15.9179 17.3614 17.1579 16.4471 18.0721C15.5329 18.9864 14.2929 19.5 13 19.5C11.7071 19.5 10.4671 18.9864 9.55285 18.0721C8.63861 17.1579 8.125 15.9179 8.125 14.625C8.125 13.3321 8.63861 12.0921 9.55285 11.1779C10.4671 10.2636 11.7071 9.75 13 9.75Z"
            fill="#333333"
          />
        </svg>
      </label>
      {file && <span style={{ marginLeft: '10px' }}>{file.name}</span>}

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

      {photo && (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ marginBottom: 20 }}>Foto Selecionada:</h2>
          <img src={photo} alt="Foto" style={{ width: '60%', height: '60%' }} />
        </div>
      )}
    </div>
  );
};

export default CameraOrGallery;
