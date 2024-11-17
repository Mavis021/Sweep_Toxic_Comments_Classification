import { useMutation } from '@tanstack/react-query';
import { post } from '../api/api.client'; // Ensure correct path to your post function

const usePostData = () => {
  return useMutation(
    ({ url, body }) => post(url, body), // Make sure you're passing the URL and body correctly
    {
      onSuccess: (data) => {
        console.log('Posting successfully', data);
      },
      onError: (error) => {
        console.log('Posting Failed', error.message);
      },
    }
  );
};

export default usePostData;
