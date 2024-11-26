import React, { useRef, useState } from 'react';

const CameraOrGallery: React.FC = () => {
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

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
          backgroundColor: '#4182f9',
          color: 'white',
        }}
      >
        Tirar Foto
      </label>

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

      {photo && (
        <div>
          <h2>Foto Selecionada:</h2>
          <img src={photo} alt="Foto" style={{ width: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default CameraOrGallery;
