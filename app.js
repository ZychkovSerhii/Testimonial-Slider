const testimotion = [
  {
    name: "Jan P.",
    pUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "I am really satisfied with my car. It's the perfect solution for our business. No matter where you go, car is the coolest, most happening thing around! It's exactly what I've been looking for.",
  },
  {
    name: "Kalila P.",
    pUrl: "https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "Car is awesome! It's just amazing. The very best. I would like to personally thank you for your outstanding product",
  },
  {
    name: "Gonzalo Z",
    pUrl: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1512&q=80",
    text: "I am so pleased with this product. Thank you for making it painless, pleasant and most of all hassle free! You've saved our business! I made back the purchase price in just 48 hours!",
  },
  {
    name: "Lind F",
    pUrl: "https://images.unsplash.com/photo-1543965860-82ed7d542cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80",
    text: "You've saved our business! I'm good to go. If you aren't sure, always go for car. Very easy to use.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

let idx = 0;
updateSlider();

function updateSlider() {
  const { name, pUrl, text } = testimotion[idx];
  imgEl.src = pUrl;
  textEl.innerText = text;
  nameEl.innerText = name;
  idx++;
  if (idx === testimotion.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateSlider();
  }, 3000);
}
