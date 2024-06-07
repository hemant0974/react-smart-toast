export const countDown = (id: string, timer: number) => {
  return new Promise((res) => setTimeout(() => res(id), timer));
};
