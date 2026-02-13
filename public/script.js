async function generate() {

  const name = document.getElementById("name").value;
  const industry = document.getElementById("industry").value;
  const color = document.getElementById("color").value;
  const tone = document.getElementById("tone").value;

  const response = await fetch("/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, industry, color, tone })
  });

  const data = await response.json();

  if (data.error) {
    alert(data.error);
    return;
  }

  const newWindow = window.open();
  newWindow.document.write(data.html);
}
