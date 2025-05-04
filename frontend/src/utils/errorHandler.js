import { toast } from 'react-toastify';

// Prevent duplicate toasts
const toastCache = new Set();

export const handleApiError = (error, defaultMessage = 'An error occurred') => {
  // Log error for debugging
  console.error('API Error:', error);

  // Generate a unique error key
  const errorKey = error.message || defaultMessage;

  // Check if this exact error has already been toasted
  if (toastCache.has(errorKey)) {
    return;
  }

  // Add to cache to prevent duplicates
  toastCache.add(errorKey);

  // Remove from cache after toast duration
  setTimeout(() => {
    toastCache.delete(errorKey);
  }, 5000); // Match toast duration

  // Check if error has a response from server
  if (error.response) {
    // Server responded with an error status
    const { status, data } = error.response;
    switch (status) {
      case 404:
        toast.error('Resource not found');
        break;
      case 500:
        toast.error('Server error. Please try again later.');
        break;
      default:
        toast.error(data.message || defaultMessage);
    }
  } else if (error.request) {
    // Request was made but no response received (network error)
    toast.error('Network error. Please check your connection.');
  } else {
    // Something else went wrong
    toast.error(defaultMessage);
  }
};
