const setLoading = (isLoading: boolean, elementId: string) => {
  const loadingOverlay = document.getElementById(
    "loadingOverlay"
  ) as HTMLElement;
  const saveButton = document.getElementById(elementId) as HTMLButtonElement;

  if (isLoading) {
    loadingOverlay.classList.remove("hidden");
    saveButton.disabled = true;
  } else {
    loadingOverlay.classList.add("hidden");
    saveButton.disabled = false;
  }
};

export default setLoading;
