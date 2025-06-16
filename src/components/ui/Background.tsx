type Blob = {
  top: string;
  left: string;
  size: string;
  opacity: number;
  color: string;
}

const Background = () => {
  const blobs: Blob[] = [
    { top: '10%', left: '55%', size: '200px', opacity: 1, color: '#c64dbf' },
    // { top: '30%', left: '70%', size: '50px', opacity: 1, color: '#c64dbf' },
    // { top: '60%', left: '40%', size: '70px', opacity: 1, color: '#c64dbf' },
  ]

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
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
            backgroundColor: blob.color,
          }}
        />
      ))}

    </div>
  )
}

export default Background;
