export const generateUniqueId = () => {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substring(2, 10);
  return `${timestamp}-${randomNum}`;
};
