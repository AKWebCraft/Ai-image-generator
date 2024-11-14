export const handleDownload = (imageUrl) => {
  if (imageUrl) {
    const a = document.createElement("a");
    a.href = imageUrl;
    a.target = "_blank";
    a.download = "generated-image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
