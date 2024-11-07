document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.querySelector("form");
  const confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal")
  );
  const confirmSubmitButton = document.getElementById("confirmSubmit");

  // Modal elements
  const modalFullName = document.getElementById("modalFullName");
  const modalEmail = document.getElementById("modalEmail");
  const modalStatus = document.getElementById("modalStatus");
  const modalCourses = document.getElementById("modalCourses");
  const modalComments = document.getElementById("modalComments");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Capture form data
    const fullName = document.getElementById("fullnameText").value;
    const email = document.getElementById("emailInput").value;
    const status = document.getElementById("statusOption").value;
    const comments = document.getElementById("textArea").value;
    const courses = [];

    // Check each course checkbox
    if (document.getElementById("programmingLanguages").checked)
      courses.push("Programming Languages");
    if (document.getElementById("operatingSystems").checked)
      courses.push("Operating Systems");
    if (document.getElementById("webDevelopment").checked)
      courses.push("Full Stack Web Development");

    // Populate modal with captured data
    modalFullName.textContent = fullName;
    modalEmail.textContent = email;
    modalStatus.textContent = status;
    modalCourses.textContent = courses.length ? courses.join(", ") : "None";
    modalComments.textContent = comments;

    // Show confirmation modal
    confirmationModal.show();
  });

  // Handle confirmation button click in modal
  confirmSubmitButton.addEventListener("click", function () {
    confirmationModal.hide();
    form.submit(); // Proceed with form submission
  });
});
