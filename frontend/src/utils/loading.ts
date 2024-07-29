const setLoading = (isLoading: boolean) => {
  const loadingSpinner = document.getElementById(
    "loadingSpinner"
  ) as HTMLElement;
  const signUpButton = document.getElementById(
    "signUpButton"
  ) as HTMLButtonElement;

  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
    signUpButton.disabled = true;
  } else {
    loadingSpinner.classList.add("hidden");
    signUpButton.disabled = false;
  }
};

export default setLoading;
