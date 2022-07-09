import ImageCompression from "./browser-image-compression/dist/browser-image-compression";

function PhotoUpload() {
    async function handleImageUpload(event) {

        const imageFile = event.target.files[0];
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true
        }
        try {
          //set start point anywhere you want
          var start = new Date(); 
          const compressedFile = await ImageCompression(imageFile, options);
          console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
          console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
          //when done,
          var end = new Date();

          //to profile milliseconds, just do 
          var duration = end - start;
          console.log('duration :' + duration/1000)
        } 
        catch (error) {
          console.log(error);
        }

      }
  return (
    <>
     <div>
      <input type="file" accept="image" onChange={event => handleImageUpload(event)}/>
     </div>
    </>
  );
}

export default PhotoUpload;