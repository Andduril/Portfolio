type Blob = {
  top: string;
  left: string;
  size: string;
  opacity: number;
  blobColors?: BlobColors;
};

export type BlobColors = {
  beginColor: string;
  endColor: string;
  rotation?: string;
};

const pinkBlob: BlobColors = {
  beginColor: '#c64dbf',
  endColor: '#391748',
  rotation: '180deg',
};

const purpleBlob: BlobColors = {
  beginColor: '#4e2262',
  endColor: '#5d2278',
  rotation: '180deg',
};

const Background = () => {
  const blobs: Blob[] = [
    {
      top: '10%',
      left: '40%',
      size: '180px',
      opacity: 1,
      blobColors: pinkBlob,
    },
    {
      top: '60%',
      left: '10%',
      size: '85px',
      opacity: 1,
      blobColors: purpleBlob,
    },
    {
      top: '85%',
      left: '70%',
      size: '50px',
      opacity: 1,
      blobColors: purpleBlob,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden">
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            opacity: blob.opacity,
            background: `linear-gradient(${blob.blobColors?.rotation || '0deg'}, ${blob.blobColors?.beginColor}, ${blob.blobColors?.endColor})`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
