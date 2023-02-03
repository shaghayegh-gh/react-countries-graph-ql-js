 const useChunk = (data = [], chunkSize = 10) => {
  if (!data.length) return null;
  
  const pages = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    pages.push(chunk);
  }
  return pages;
};

export default useChunk
