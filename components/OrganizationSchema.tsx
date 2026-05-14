export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://julietterk.com/#organization",
        name: "Juliette Reese-Kari",
        url: "https://julietterk.com",
        logo: {
          "@type": "ImageObject",
          url: "https://julietterk.com/og.png",
        },
        sameAs: [],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://julietterk.com/#business",
        name: "Juliette Reese-Kari - Paediatric Dietitian",
        url: "https://julietterk.com",
        description:
          "Online paediatric dietitian consultations for infants, children and teens. HCPC registered, 8+ years NHS specialist experience.",
        image: "https://julietterk.com/og.png",
        priceRange: "££",
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        serviceType: "Paediatric Dietetics",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Paediatric Dietitian Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "New Patient Consultation",
                description: "60-minute online paediatric dietetic consultation with written plan",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Follow-Up Consultation",
                description: "30-minute online follow-up paediatric dietetic consultation",
              },
            },
          ],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.5074,
          longitude: -0.1278,
        },
        telephone: "",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        founder: {
          "@type": "Person",
          name: "Juliette Reese-Kari",
          jobTitle: "Paediatric Dietitian",
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "degree",
              name: "BSc (Hons) Dietetics & Nutrition",
            },
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "professional",
              name: "HCPC Registered Dietitian - DT29509",
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
