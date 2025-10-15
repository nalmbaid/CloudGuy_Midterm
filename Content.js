//list below pulled from chatGPT
const knownDomains = [
  // Mainstream fashion
  "hm.com", "zara.com", "uniqlo.com", "gap.com", "oldnavy.com",
  "target.com", "walmart.com", "kohls.com", "macys.com", "jcpenney.com",
  "nordstrom.com", "bloomingdales.com", "urbanoutfitters.com",
  "forever21.com", "express.com", "jcrew.com", "abercrombie.com",
  "aeropostale.com", "bananaRepublic.com", "annTaylor.com",
  "loft.com", "madewell.com", "landsend.com", "eddiebauer.com","oldnavy.gap.com",

  // Online fashion-only retailers
  "asos.com", "shein.com", "boohoo.com", "prettylittlething.com",
  "missguided.com", "revolve.com", "lulus.com", "fashionnova.com",
  "princesspolly.com", "ohpolly.com", "whitefoxboutique.com",
  "vergegirl.com", "shopbop.com", "ssense.com", "farfetch.com",
  "yoox.com", "theoutnet.com", "matchesfashion.com", "mytheresa.com",
  "net-a-porter.com", "renttherunway.com",

  // Sportswear & sneakers
  "nike.com", "adidas.com", "reebok.com", "puma.com", "newbalance.com",
  "converse.com", "vans.com", "underarmour.com", "asics.com",
  "champion.com", "fila.com", "footlocker.com", "finishline.com",
  "eastbay.com", "stockx.com", "goat.com", "flightclub.com",
  "stadiumgoods.com", "hoka.com", "on-running.com", "allbirds.com",
  "lululemon.com", "gymshark.com", "aloYoga.com",

  // Department stores & marketplaces
  "amazon.com", "ebay.com", "etsy.com", "aliexpress.com", "poshmark.com",
  "thredup.com", "depop.com", "grailed.com", "theRealreal.com",
  "mercari.com", "zalando.com", "shopify.com",

  // Luxury & designer
  "gucci.com", "prada.com", "dior.com", "chanel.com", "balenciaga.com",
  "burberry.com", "louisvuitton.com", "saintlaurent.com", "versace.com",
  "hermes.com", "fendi.com", "celine.com", "valentino.com",
  "bottegaveneta.com", "moncler.com", "off---white.com",
  "fearofgod.com", "givenchy.com", "balmain.com",

  // Outdoor, streetwear, & lifestyle
  "patagonia.com", "thenorthface.com", "columbia.com", "arcteryx.com",
  "carhartt.com", "timberland.com", "dockers.com", "levis.com",
  "wrangler.com", "diesel.com", "superdry.com", "hollisterco.com",
  "birkenstock.com", "crocs.com", "ugg.com", "drmartens.com",
  "toms.com", "vionicshoes.com", "skechers.com",

  // Sustainable & DTC brands
  "everlane.com", "tentree.com", "outerknown.com", "pact.com",
  "girlfriend.com", "mate-the-label.com", "reformation.com",
  "veja-store.com", "rains.com", "bombas.com", "allsbirds.com",

  // Beauty & accessories (adjacent to fashion)
  "sephora.com", "ulta.com", "glossier.com", "fentybeauty.com",
  "kyliecosmetics.com", "rarebeauty.com", "patmcgrath.com",

  // Regional fashion e-commerce
  "zalora.com", "myntra.com", "ajio.com", "nykaa.com",
  "asos.co.uk", "boohooman.com", "aboutyou.com", "asos.de",
  "asos.fr", "asos.com.au"
];

// Keyword categories
const categories = {
  // Clothing
  clothing: [
    "shirt", "tshirt", "tee", "top", "blouse", "tank", "crop", "hoodie",
    "sweatshirt", "sweater", "jumper", "cardigan", "jacket", "coat",
    "blazer", "vest", "dress", "skirt", "shorts", "jeans", "pants",
    "trousers", "leggings", "joggers", "suit", "romper", "jumpsuit",
    "onesie", "bodysuit", "pajamas", "sleepwear", "robe", "kimono",
    "uniform", "tracksuit", "activewear", "workout", "athleisure",
    "swimwear", "bikini", "swimsuit", "coverup", "raincoat"
  ],

  // Shoes & footwear
  shoes: [
    "shoe", "sneaker", "trainer", "boot", "heel", "flat", "loafer",
    "oxford", "moccasin", "sandal", "flipflop", "slipper", "wedge",
    "cleat", "espadrille", "clog", "platform", "derby", "running shoe",
    "trail shoe", "soccer shoe", "basketball shoe", "skate shoe"
  ],

  // Bags & luggage
  bag: [
    "bag", "backpack", "tote", "crossbody", "handbag", "purse",
    "satchel", "duffel", "briefcase", "messenger", "clutch",
    "wallet", "fannypack", "beltbag", "weekender", "carryon",
    "luggage", "suitcase", "travel bag", "drawstring", "pack"
  ],

  // Accessories
  accessories: [
    "hat", "cap", "beanie", "scarf", "belt", "glove", "mittens",
    "tie", "bowtie", "headband", "hairclip", "barrette", "bandana",
    "watch", "bracelet", "necklace", "ring", "earring", "sunglasses",
    "goggles", "wallet", "keychain", "umbrella"
  ],

  // Jewelry (separated if you want precision)
  jewelry: [
    "ring", "necklace", "bracelet", "earring", "anklet", "brooch",
    "pendant", "choker", "bangle", "chain", "cufflink"
  ],

  // Beauty & cosmetics
  beauty: [
    "makeup", "lipstick", "mascara", "eyeliner", "foundation",
    "blush", "concealer", "powder", "perfume", "cologne", "fragrance",
    "nail polish", "skincare", "cleanser", "moisturizer", "serum",
    "haircare", "shampoo", "conditioner", "hairbrush", "dryer"
  ],

  // Sports & outdoor
  sports: [
    "sportswear", "jersey", "cleats", "yogamat", "helmet", "gloves",
    "pads", "bike", "bicycle", "soccer", "basketball", "tennis",
    "golf", "surfboard", "skateboard", "ski", "snowboard", "tent",
    "backpack", "hydration pack", "water bottle", "outdoor", "hiking"
  ],

  // Kids & toys
  toy: [
    "toy", "lego", "doll", "stuffed", "teddy", "playset", "puzzle",
    "boardgame", "game", "figure", "action figure", "car", "train",
    "blocks", "educational toy", "model", "rc car", "ball", "yo-yo"
  ],

  // Home & lifestyle (optional broader scope)
  home: [
    "blanket", "pillow", "bedding", "sheet", "towel", "curtain",
    "rug", "lamp", "furniture", "chair", "table", "candle", "decor",
    "mirror", "vase", "clock", "storage", "basket"
  ],

  // Tech accessories (many fashion stores sell them too)
  tech: [
    "phone case", "laptop sleeve", "charger", "headphones",
    "earbuds", "smartwatch", "airpods", "tablet case"
  ]
};


// Category-based opacities
const categoryOpacity = {
  clothing: 0.85,
  shoes: 0.8,
  bag: 0.9,
  accessories: 0.75,
  jewelry: 0.7,
  beauty: 0.65,
  sports: 0.8,
  toy: 0.5,
  home: 0.6,
  tech: 0.7,
  unknown: 0.6
};
// ==================== Flash Message ====================
function flashMessage(text = "Emissions logged") {
  const msg = document.createElement("div");
  msg.textContent = text;

  Object.assign(msg.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0, 0, 0, 0.8)",
    color: "white",
    padding: "16px 32px",
    borderRadius: "8px",
    fontSize: "20px",
    fontWeight: "bold",
    zIndex: "10000",
    opacity: "0",
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
  });

  document.body.appendChild(msg);

  // Fade in, then fade out quickly
  requestAnimationFrame(() => { msg.style.opacity = "1"; });
  setTimeout(() => { msg.style.opacity = "0"; }, 1000); // fade out after 1s
  setTimeout(() => msg.remove(), 1300); // remove after fade-out
}

// Image sequence and state
const imageFiles = ["ems1.png", "ems2.png", "ems3.png", "ems4.png", "ems5.png", "ems6.png", "ems7.png"];
let currentImageIndex = 0;
let activeImageElement = null;

//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FUNCTIONS HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Check if on a shopping site
function isShoppingSite() {
  const hostname = window.location.hostname.toLowerCase();
  return knownDomains.some(domain => hostname.includes(domain));
}

// Detect item category from title
function detectCategory(title) {
  title = title.toLowerCase();
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(k => title.includes(k))) {
      return category;
    }
  }
  return "unknown";
}

// Add image to page at fixed position 
function createPopupImage(filename, options = {}) {
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL(filename);

  const width = options.width || "100px"; // ## updated here - fixed width
  const left = options.left || "20px";
  const top = options.top || "20px";
  const opacity = options.opacity !== undefined ? options.opacity : 0.8;

  Object.assign(img.style, {
    width,
    height: "auto", // ## updated here - maintain aspect ratio
    left,
    top,
    opacity: "0",
    position: "fixed",
    borderRadius: "8px",
    zIndex: "9999",
    pointerEvents: "none",
    transition: "opacity 0.6s ease"
  });

  img.onload = () => {
    requestAnimationFrame(() => {
      img.style.opacity = opacity;
    });
  };

  img.onerror = () => {
    console.warn("Image failed to load:", img.src);
  };

  document.body.appendChild(img);
  return img;
}

// Get item title on page
function getItemTitle() {
  const titleEl = document.querySelector(
    "h1[data-testid='product-title'], h1[data-test='product-title'], h1#pdp-product-title-id, h1.pdp-product-title"
  );
  return titleEl ? titleEl.textContent.trim() : document.title;
}

// Check if clicked element is an Add to Cart button
function isAddToCartButton(button) {
  const keywords = [
    "add to cart", "add to bag", "buy now", "purchase",
    "add item", "shop now", "order now", "get it now", "+"
  ];
  const text = button.textContent?.trim().toLowerCase() || "";

  for (const word of keywords) {
    if (text.includes(word)) return true;
  }

  const attrs = [
    button.id,
    button.getAttribute("data-testid"),
    button.getAttribute("aria-label"),
    button.getAttribute("name"),
    button.className
  ].join(" ").toLowerCase();

  for (const word of keywords) {
    if (attrs.includes(word.replace(/\s+/g, ""))) return true;
  }

  return false;
}


// Random integer generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// !!!!!!!!!!!!!!!!!!!!! EVENT HANDLERS & INITIALIZATION 
// Show last image when site loads
if (isShoppingSite()) {
  // Retrieve last saved index or default to 0
  const savedIndex = parseInt(localStorage.getItem("currentImageIndex"), 10);
  if (!isNaN(savedIndex)) {
    currentImageIndex = Math.min(savedIndex, imageFiles.length - 1);
  } else {
    currentImageIndex = 0;
  }

  const initialTitle = getItemTitle();
  const initialCategory = detectCategory(initialTitle);
  const initialOpacity = categoryOpacity[initialCategory] ?? 0.6;

  activeImageElement = createPopupImage(imageFiles[currentImageIndex], {
    left: "20px",
    top: "20px",
    opacity: initialOpacity
  });

  console.log("Detected category:", initialCategory);
  console.log("Restored image:", imageFiles[currentImageIndex]);
}


// added remove options
document.addEventListener("click", function (e) {
  if (!isShoppingSite()) return;

  const button = e.target.closest("button, a"); // ##updated here (to detect links too)
  if (!button) return;

  const text = (button.textContent || "").toLowerCase();
  const aria = (button.getAttribute("aria-label") || "").toLowerCase();
  const classes = (button.className || "").toLowerCase();

  // Detect add-to-cart
  const isAdd =
    text.includes("add to cart") ||
    text.includes("add to bag") ||
    text.includes("buy now") ||
    aria.includes("add") ||
    aria.includes("bag") ||
    text.includes("+") ||
    classes.includes("add");

  // Detect remove (##updated here)
  const isRemove =
    text.includes("remove") ||
    aria.includes("remove") ||
    classes.includes("remove") ||
    classes.includes("minus") ||
    text.includes("-");

  // ADD logic
  if (isAdd) {
    console.log("Add to Cart detected! Showing next image");

    currentImageIndex += 1;
    if (currentImageIndex >= imageFiles.length - 1) {
      currentImageIndex = imageFiles.length - 1;
    }

    updateDisplayedImage();
    flashMessage("Emissions noted");
  }

  // REMOVE logic (##updated here)
  else if (isRemove) {
    console.log("Remove detected! Showing previous image");

    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
      currentImageIndex = 0;
    }

    updateDisplayedImage();
  }
});

// Helper to show image (##updated here)
function updateDisplayedImage() {
  const chosenImage = imageFiles[currentImageIndex];

  const title = getItemTitle();
  const category = detectCategory(title);
  const opacity = categoryOpacity[category] ?? 0.8;

  if (activeImageElement) {
    const oldImage = activeImageElement;
    oldImage.style.opacity = "0";
    setTimeout(() => oldImage.remove(), 600);
  }

  activeImageElement = createPopupImage(chosenImage, {
    left: "20px",
    top: "20px",
    opacity
  });

  // Persist current image index (##updated here)
  localStorage.setItem("currentImageIndex", currentImageIndex);
}
