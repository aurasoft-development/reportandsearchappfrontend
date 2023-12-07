import axios from "axios";

// Function to upload captured images
export const uploadImages = async (captureImage) => {
    try {
        const apiUrl = `${import.meta.env.VITE_API_URL}/api/user/upload_image`;
        const formData = new FormData();
        formData.append('files', captureImage);

        const response = await axios.post(apiUrl, formData)
        return response;
    } catch (error) {
        // Throwing the error for further handling
        throw error;
    }
}

 // Function to convert data URI to Blob
 export const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
};
