// Expand/collapse behavior for trail nodes
document.querySelectorAll(".node-header").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const target = document.getElementById(targetId);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    target.hidden = isExpanded;
  });
});
