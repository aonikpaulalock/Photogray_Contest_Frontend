export const uploadImageToDB = async (image: File, apiKey: string): Promise<string | null> => {
  const imagebbApi = `https://api.imgbb.com/1/upload?key=${apiKey}`;
  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await fetch(imagebbApi, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return data.data.display_url;
    } else {
      console.error("Image upload failed:", data);
      return null;
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

export const uploadMultipleImagesToDB = async (
  images: File[], 
  apiKey: string
): Promise<string[]> => {
  const imagebbApi = `https://api.imgbb.com/1/upload?key=${apiKey}`;

  const uploadPromises = images.map(async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(imagebbApi, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      return data.success ? data.data.display_url : "";
    } catch (error) {
      console.error("Error uploading image:", error);
      return "";
    }
  });

  return Promise.all(uploadPromises);
};
