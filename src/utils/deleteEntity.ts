/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";

// Reusable function to show delete confirmation
const deleteEntity = async (
  entityId: string, 
  deleteApiCall: (id: string) => Promise<any>,
  successMessage: string,
  errorMessage: string
) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#f44336",
    confirmButtonText: "Yes, delete it!",
    customClass: {
      popup: "swal-custom-popup",
      title: "swal-custom-title",
      confirmButton: "swal-custom-confirm",
      cancelButton: "swal-custom-cancel",
    },
  });

  if (result.isConfirmed) {
    try {
      await deleteApiCall(entityId); 
      Swal.fire("Deleted!", successMessage, "success");
    } catch (error) {
      Swal.fire("Failed!", errorMessage, "error");
      console.error("Failed to delete:", error);
    }
  }
};

export default deleteEntity;