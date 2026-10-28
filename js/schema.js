/**
 * Structured Data: Combined Schema (VideoGame, FAQPage, BreadcrumbList) for Duck Duck Clicker
 * Automatically injects JSON-LD into the document head for optimal Google SEO
 */
(function () {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://duckduckclicker.github.io/#website",
        "url": "https://duckduckclicker.github.io/",
        "name": "Duck Duck Clicker",
        "description": "Play Duck Duck Clicker unblocked free online - Fun idle duck tapping and clicker game!",
        "publisher": {
          "@type": "Organization",
          "name": "Duck Duck Clicker",
          "url": "https://duckduckclicker.github.io/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://duckduckclicker.github.io/images/duck-duck-clicker.png",
            "width": 200,
            "height": 200
          }
        }
      },
      {
        "@type": "VideoGame",
        "name": "Duck Duck Clicker",
        "alternateName": [
          "Duck Duck Clicker Unblocked",
          "Duck Clicker",
          "Duck Duck Clicker Online",
          "Duck Duck Clicker 3D",
          "Play Duck Duck Clicker"
        ],
        "description": "Duck Duck Clicker is a popular, highly addictive free online idle clicker game. Click and pet your adorable duck to earn Duckets, upgrade Duck Power, unlock automated Autoduckers for passive income, and customize your feathered friend with stylish outfits.",
        "url": "https://duckduckclicker.github.io/",
        "image": "https://duckduckclicker.github.io/images/duck-duck-clicker.png",
        "genre": [
          "Clicker Game",
          "Idle Game",
          "Casual Game",
          "Arcade",
          "Simulation"
        ],
        "gamePlatform": [
          "Web Browser",
          "Chromebook",
          "Desktop",
          "Mobile",
          "Tablet"
        ],
        "applicationCategory": "Game",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5.0",
          "ratingCount": "2450"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Duck Duck Clicker?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Duck Duck Clicker is a charming, free-to-play idle clicker game available directly in your web browser. Players tap or click a cute central duck to earn currency called Duckets, which can be reinvested into automated clickers, click-power multipliers, and fun cosmetic accessories."
            }
          },
          {
            "@type": "Question",
            "name": "How do you play Duck Duck Clicker online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Playing Duck Duck Clicker is simple and intuitive: Click or tap the duck on the screen to accumulate Duckets. Use your Duckets in the upgrade shop to purchase Duck Power (increasing your Duckets per tap) and Autoduckers (generating automatic passive income every second). Catch floating bonus ducks for massive rewards!"
            }
          },
          {
            "@type": "Question",
            "name": "Can I play Duck Duck Clicker unblocked on school Chromebooks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Duck Duck Clicker Unblocked is built on modern HTML5 technology with zero Flash or software installations required. It bypasses restrictive network firewalls and runs smoothly on school Chromebooks, laptops, iOS, and Android devices."
            }
          },
          {
            "@type": "Question",
            "name": "What are the best tips to earn Duckets fast in Duck Duck Clicker?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the early game, actively tap to buy your first few Autoduckers. As passive income begins accumulating, balance your spending between tap power and idle upgrades. Always keep an eye out for floating mystery bonus ducks that grant huge temporary multipliers!"
            }
          },
          {
            "@type": "Question",
            "name": "Does Duck Duck Clicker save my progress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Duck Duck Clicker automatically saves your Duckets, upgrades, and unlocked cosmetics in your browser's local storage so you can resume playing anytime without losing your progress."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://duckduckclicker.github.io/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Clicker Games",
            "item": "https://duckduckclicker.github.io/#new-games"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Duck Duck Clicker Unblocked",
            "item": "https://duckduckclicker.github.io/"
          }
        ]
      }
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
})();
