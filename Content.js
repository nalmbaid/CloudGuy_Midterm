const knownDomains = [
  "hm.com", "zara.com", "uniqlo.com", "gap.com", "oldnavy.com", "oldnavy.gap.com",
  "target.com", "walmart.com", "kohls.com", "macys.com", "jcpenney.com",
  "nordstrom.com", "bloomingdales.com", "urbanoutfitters.com", "forever21.com",
  "express.com", "jcrew.com", "abercrombie.com", "aeropostale.com", "bananaRepublic.com",
  "annTaylor.com", "loft.com", "madewell.com", "landsend.com", "eddiebauer.com",
  "asos.com", "shein.com", "boohoo.com", "prettylittlething.com", "missguided.com",
  "revolve.com", "lulus.com", "fashionnova.com", "princesspolly.com", "ohpolly.com",
  "whitefoxboutique.com", "vergegirl.com", "shopbop.com", "ssense.com", "farfetch.com",
  "yoox.com", "theoutnet.com", "matchesfashion.com", "mytheresa.com", "net-a-porter.com",
  "renttherunway.com", "nike.com", "adidas.com", "reebok.com", "puma.com", "newbalance.com",
  "converse.com", "vans.com", "underarmour.com", "asics.com", "champion.com", "fila.com",
  "footlocker.com", "finishline.com", "eastbay.com", "stockx.com", "goat.com",
  "flightclub.com", "stadiumgoods.com", "hoka.com", "on-running.com", "allbirds.com",
  "lululemon.com", "gymshark.com", "aloYoga.com", "amazon.com", "ebay.com", "etsy.com",
  "aliexpress.com", "poshmark.com", "thredup.com", "depop.com", "grailed.com",
  "theRealreal.com", "mercari.com", "zalando.com", "shopify.com", "gucci.com", "prada.com",
  "dior.com", "chanel.com", "balenciaga.com", "burberry.com", "louisvuitton.com",
  "saintlaurent.com", "versace.com", "hermes.com", "fendi.com", "celine.com", "valentino.com",
  "bottegaveneta.com", "moncler.com", "off---white.com", "fearofgod.com", "givenchy.com",
  "balmain.com", "patagonia.com", "thenorthface.com", "columbia.com", "arcteryx.com",
  "carhartt.com", "timberland.com", "dockers.com", "levis.com", "wrangler.com",
  "diesel.com", "superdry.com", "hollisterco.com", "birkenstock.com", "crocs.com", "ugg.com",
  "drmartens.com", "toms.com", "vionicshoes.com", "skechers.com", "everlane.com", "tentree.com",
  "outerknown.com", "pact.com", "girlfriend.com", "mate-the-label.com", "reformation.com",
  "veja-store.com", "rains.com", "bombas.com", "allsbirds.com", "sephora.com", "ulta.com",
  "glossier.com", "fentybeauty.com", "kyliecosmetics.com", "rarebeauty.com", "patmcgrath.com",
  "zalora.com", "myntra.com", "ajio.com", "nykaa.com", "asos.co.uk", "boohooman.com",
  "aboutyou.com", "asos.de", "asos.fr", "asos.com.au","clarks.com","sezane.com"
];

const categories = {
  clothing: [
    "shirt", "tshirt", "tee", "top", "blouse", "tank", "crop", "hoodie",
    "sweatshirt", "sweater", "jumper", "cardigan", "jacket", "coat",
    "blazer", "vest", "dress", "skirt", "shorts", "jeans", "pants",
    "trousers", "leggings", "joggers", "suit", "romper", "jumpsuit",
    "onesie", "bodysuit", "pajamas", "sleepwear", "robe", "kimono",
    "uniform", "tracksuit", "activewear", "workout", "athleisure",
    "swimwear", "bikini", "swimsuit", "coverup", "raincoat"
  ],
  shoes: [
    "shoe", "sneaker", "trainer", "boot", "heel", "flat", "loafer",
    "oxford", "moccasin", "sandal", "flipflop", "slipper", "wedge",
    "cleat", "espadrille", "clog", "platform", "derby", "running shoe",
    "trail shoe", "soccer shoe", "basketball shoe", "skate shoe"
  ],
  bag: [
    "bag", "backpack", "tote", "crossbody", "handbag", "purse",
    "satchel", "duffel", "briefcase", "messenger", "clutch",
    "fannypack", "beltbag", "weekender", "carryon",
    "luggage", "suitcase", "travel bag", "drawstring", "pack"
  ],
  accessories: [
    "hat", "cap", "beanie", "scarf", "belt", "glove", "mittens",
    "tie", "bowtie", "headband", "hairclip", "barrette", "bandana",
    "watch", "bracelet", "necklace", "ring", "earring", "sunglasses",
    "goggles", "keychain", "umbrella"
  ],
  jewelry: [
    "ring", "necklace", "bracelet", "earring", "anklet", "brooch",
    "pendant", "choker", "bangle", "chain", "cufflink"
  ],
  beauty: [
    "makeup", "lipstick", "mascara", "eyeliner", "foundation",
    "blush", "concealer", "powder", "perfume", "cologne", "fragrance",
    "nail polish", "skincare", "cleanser", "moisturizer", "serum",
    "haircare", "shampoo", "conditioner", "hairbrush", "dryer"
  ],
  toy: [
    "toy", "lego", "doll", "stuffed", "teddy", "playset", "puzzle",
    "boardgame", "game", "figure", "action figure", "car", "train",
    "blocks", "educational toy", "model", "ball", "yo-yo"
  ],
  home: [
    "blanket", "pillow", "bedding", "sheet", "towel", "curtain",
    "rug", "lamp", "furniture", "chair", "table", "candle", "decor",
    "mirror", "vase", "clock", "storage", "basket"
  ],
  tech: [
    "phone case", "laptop sleeve", "charger", "headphones",
    "earbuds", "smartwatch", "airpods", "tablet case"
  ]
};

function flashMessage(text = "Emissions noted") {
  const msg = document.createElement("div");
  msg.textContent = text;
  Object.assign(msg.style, {
    position: "fixed",
    top: "30%", left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0, 0, 0, 0.8)", color: "white",
    padding: "16px 32px", borderRadius: "8px",
    fontSize: "20px", fontWeight: "bold",
    zIndex: "10000", opacity: "0", transition: "opacity 0.5s",
    pointerEvents: "none"
  });
  document.body.appendChild(msg);
  requestAnimationFrame(() => msg.style.opacity = "1");
  setTimeout(() => msg.style.opacity = "0", 5000);
  setTimeout(() => msg.remove(), 1300);
}

function isShoppingSite() {
  return knownDomains.some(domain => location.hostname.includes(domain));
}

function detectCategory(title) {
  title = title.toLowerCase();
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(k => title.includes(k))) {
      return category;
    }
  }
  return "unknown";
}


function getItemTitle() {
  const titleEl = document.querySelector(
    "h1[data-testid='product-title'], h1[data-test='product-title'], h1#pdp-product-title-id, h1.pdp-product-title"
  );
  return titleEl ? titleEl.textContent.trim() : document.title;
}

function createPopupImage(filename, options = {}) {
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL(filename);

  Object.assign(img.style, {
    width: options.width || "100px",
    height: "auto",
    left: options.left || "20px",
    top: options.top || "20px",
    opacity: options.opacity || "0.8",
    position: "fixed",
    borderRadius: "8px",
    zIndex: "9999",
    pointerEvents: "none",
    transition: "opacity 0.6s ease"
  });

  img.onload = () => requestAnimationFrame(() => img.style.opacity = options.opacity || "0.8");
  img.onerror = () => console.warn("Image failed to load:", img.src);

  document.body.appendChild(img);
  return img;
}

function updateDisplayedImage() {
  const chosenImage = imageFiles[currentImageIndex];

  // Remove fade-out behavior — only replace if needed
  if (activeImageElement) {
    activeImageElement.src = chrome.runtime.getURL(chosenImage);
    activeImageElement.style.opacity = "0.8"; // ensure it's visible
  } else {
    activeImageElement = createPopupImage(chosenImage, {
      left: "20px",
      top: "20px",
      opacity: 0.8
    });
  }

  // Persist image index
  localStorage.setItem("currentImageIndex", currentImageIndex);
}

const imageFiles = ["ems1.png", "ems2.png", "ems3.png", "ems4.png", "ems5.png", "ems6.png", "ems7.png"];
let currentImageIndex = 0;
let activeImageElement = null;

// Initialize on load
if (isShoppingSite()) {
  const savedIndex = parseInt(localStorage.getItem("currentImageIndex"), 10);
  currentImageIndex = isNaN(savedIndex) ? 0 : Math.min(savedIndex, imageFiles.length - 1);

  const initialTitle = getItemTitle();
  const initialCategory = detectCategory(initialTitle);

  activeImageElement = createPopupImage(imageFiles[currentImageIndex]);

  console.log("Detected category:", initialCategory);
  console.log("Restored image:", imageFiles[currentImageIndex]);
}

// Handle clicks
document.addEventListener("click", (e) => {
  if (!isShoppingSite()) return;

  const button = e.target.closest("button, a");
  if (!button) return;

  const text = (button.textContent || "").toLowerCase();
  const aria = (button.getAttribute("aria-label") || "").toLowerCase();
  const classes = (button.className || "").toLowerCase();

  const addKeywords = ["add to cart", "add to bag", "buy now", "purchase", "add", "shop now", "order now", "+"];
  const removeKeywords = ["remove", "minus", "-"];

  const isAdd = addKeywords.some(word => text.includes(word) || aria.includes(word) || classes.includes(word));
  const isRemove = removeKeywords.some(word => text.includes(word) || aria.includes(word) || classes.includes(word));

  if (isAdd) {
    currentImageIndex = Math.min(currentImageIndex + 1, imageFiles.length - 1);
    updateDisplayedImage();
    flashMessage();
  } else if (isRemove) {
    currentImageIndex = Math.max(currentImageIndex - 1, 0);
    updateDisplayedImage();
  }
});
