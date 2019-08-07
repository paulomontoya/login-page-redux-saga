export const loginService = ({ payload }) => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          user: {
            email: payload.email,
            token: "aGV5IHNoZXJsb2NrIGhvbG1lcw=="
          }
        }),
      3000
    );
  });
};
