import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import toast from "react-hot-toast";

/**
 * useApiQuery
 * Reusable hook for GET requests using TanStack Query.
 * @param {Array} key - Query key for caching
 * @param {string} url - API endpoint
 * @param {Object} options - TanStack Query options
 */
export function useApiQuery(key, url, options = {}) {
  return useQuery({
    queryKey: key,
    queryFn: () => apiClient.get(url),
    staleTime: 5 * 60 * 1000, // Default 5 mins stale time
    ...options,
  });
}

/**
 * useApiMutation
 * Reusable hook for POST/PUT/DELETE requests using TanStack Query.
 * @param {string} url - API endpoint
 * @param {Object} options - Mutation options (onSuccess, invalidate, etc.)
 */
export function useApiMutation(url, options = {}) {
  const queryClient = useQueryClient();
  const method = options.method || "POST";

  return useMutation({
    mutationFn: (data) => {
      if (method === "POST") return apiClient.post(url, data);
      if (method === "PUT") return apiClient.put(url, data);
      if (method === "DELETE") return apiClient.delete(url);
      return apiClient.post(url, data);
    },
    onSuccess: (data) => {
      if (options.successMessage) {
        toast.success(options.successMessage);
      }
      
      if (options.onSuccess) options.onSuccess(data);
      
      if (options.invalidate) {
        queryClient.invalidateQueries({ queryKey: options.invalidate });
      }
    },
    onError: (error) => {
      const message = error.message || "An unexpected error occurred";
      toast.error(message);
      
      if (options.onError) options.onError(error);
    },
  });
}
