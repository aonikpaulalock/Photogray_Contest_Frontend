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