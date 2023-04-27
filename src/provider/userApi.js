import apiClient from ".";

export const getAllUsers = async () => {
  const response = await apiClient.get(`/users`);
  return response.data;
};

export const addUser = async (formData) => {
  const response = await apiClient.post(`/users`, formData);
  return response.data;
};
