document.getElementById("submit-btn").addEventListener("click", async () => {
  const language = document.querySelector('input[name="lang"]:checked').value;
  const answer1 = document.getElementById("answer1").value;
  const answer2 = document.getElementById("answer2").value;
  const answer3 = document.getElementById("answer3").value;
  const callbackRequested = document.getElementById("callback").checked;

  if (!answer3) {
    alert("Please select a date.");
    return;
  }

  const payload = { language, answer1, answer2, answer3, callbackRequested };

  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      window.location.href = "/thankyou.html";
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error.");
  }
});