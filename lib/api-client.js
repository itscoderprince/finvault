/**
 * Global API Client
 * Centralized fetch wrapper with automatic error handling and production-level parsing.
 */
export const apiClient = {
  /**
   * GET Request
   */
  get: async (url, options = {}) => {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    return handleResponse(res);
  },

  /**
   * POST Request
   */
  post: async (url, data, options = {}) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });

    return handleResponse(res);
  },

  /**
   * PUT Request
   */
  put: async (url, data, options = {}) => {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });

    return handleResponse(res);
  },

  /**
   * DELETE Request
   */
  delete: async (url, options = {}) => {
    const res = await fetch(url, {
      method: "DELETE",
      ...options,
    });

    return handleResponse(res);
  },
};

/**
 * Handle API Responses
 * Standardized error parsing for all frontend requests.
 */
async function handleResponse(response) {
  const isJson = response.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    // Standardize error message from backend or fallback to status text
    const error = (data && data.message) || response.statusText || "Internal Server Error";
    const status = response.status;
    
    console.error(`[API Error] ${status}: ${error}`);
    throw { message: error, status, data };
  }

  return data;
}
