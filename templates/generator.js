function generateTemplate(name, industry, color, tone) {

  let headline = "";
  let subtext = "";

  switch (tone) {
    case "professional":
      headline = `Transforming ${industry} with precision.`;
      subtext = `${name} delivers scalable, enterprise-grade solutions built for performance.`;
      break;

    case "bold":
      headline = `Revolutionizing ${industry}.`;
      subtext = `${name} isn’t just another startup — it's the future.`;
      break;

    case "playful":
      headline = `Making ${industry} fun again 🎉`;
      subtext = `${name} brings creativity, energy, and innovation together.`;
      break;

    case "futuristic":
      headline = `The Future of ${industry} Starts Here.`;
      subtext = `${name} merges AI, automation, and next-gen digital experience.`;
      break;

    default:
      headline = `Welcome to ${name}`;
      subtext = `Innovating in ${industry}.`;
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <title>${name}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-50 font-sans">

  <!-- Hero Section -->
  <section class="text-center py-24 text-white" style="background:${color};">
    <h1 class="text-5xl font-bold">${headline}</h1>
    <p class="mt-6 text-xl">${subtext}</p>
    <button class="mt-8 px-8 py-3 bg-white text-black rounded-xl shadow-lg hover:scale-105 transition">
      Get Started
    </button>
  </section>

  <!-- Features Section -->
  <section class="py-20 text-center">
    <h2 class="text-3xl font-bold mb-10">Why Choose ${name}?</h2>

    <div class="grid md:grid-cols-3 gap-8 px-10">
      <div class="p-6 bg-white rounded-xl shadow">
        <h3 class="font-bold text-xl">Scalable</h3>
        <p class="mt-2 text-gray-600">Built to grow with your business.</p>
      </div>

      <div class="p-6 bg-white rounded-xl shadow">
        <h3 class="font-bold text-xl">Secure</h3>
        <p class="mt-2 text-gray-600">Enterprise-grade architecture and protection.</p>
      </div>

      <div class="p-6 bg-white rounded-xl shadow">
        <h3 class="font-bold text-xl">Fast</h3>
        <p class="mt-2 text-gray-600">Optimized for speed and performance.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white text-center py-8">
    © 2026 ${name}. All rights reserved.
  </footer>

</body>
</html>
`;
}

module.exports = generateTemplate;
