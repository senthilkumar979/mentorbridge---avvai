import { useState } from 'react';
import { AddBlogRequest, AddBlogResponse } from '@/types';

export const useAddBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addBlog = async (url: string): Promise<AddBlogResponse> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/add-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url } as AddBlogRequest),
      });

      const result: AddBlogResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || result.message || 'Failed to add blog');
      }

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to add blog';
      setError(errorMessage);
      return {
        success: false,
        message: errorMessage,
        error: errorMessage
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addBlog,
    isLoading,
    error,
    clearError: () => setError(null)
  };
};
