import { LIMIT } from "../constants/writings";
import { navigateTo } from "../scripts/eventHandlers/auth.eventhandler";

export const updatePaginationControls = (
  totalStories: number,
  currentPage: number,
  fetchFunction: (page: number) => void
) => {
  const existingPaginationControls = document.getElementById(
    "pagination-controls"
  );

  let paginationControls: HTMLDivElement;

  if (!existingPaginationControls) {
    paginationControls = document.createElement("div");
    paginationControls.id = "pagination-controls";
    paginationControls.classList.add("pagination-controls");
    document.body.appendChild(paginationControls);
  } else {
    paginationControls = existingPaginationControls as HTMLDivElement;
  }

  paginationControls.innerHTML = "";

  const totalPages = Math.ceil(totalStories / parseInt(LIMIT));

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = page.toString();
    pageButton.classList.add("p-2", "border", "rounded", "mx-1");

    if (page === currentPage) {
      pageButton.classList.add("bg-blue-500", "text-white");
    } else {
      pageButton.classList.add("bg-gray-200", "text-gray-700");
    }

    pageButton.addEventListener("click", () =>{
        const newPath = `/stories?page=${page}`;
        history.pushState({}, "", newPath);
        // navigateTo(`/stories?page=${page}`)
        fetchFunction(page);
    }
    
    );
    paginationControls.appendChild(pageButton);
  }
};
