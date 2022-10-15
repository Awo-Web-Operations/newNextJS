export interface LinkItem {
  id: string;
  title: string;
  href: string;
}

export interface FooterCategories {
    catId: string;
  title: "Services" | "Resources" | "Company";
  linkItems: LinkItem[];
}

export const categoriesData: FooterCategories[] = [
  {
    catId: "cat-1",
    title: "Services",
    linkItems: [
      {
        id: "service-item-1",
        title: "Recipes",
        href: "/",
      },
      {
        id: "service-item-2",
        title: "Grocery List",
        href: "/",
      },
      {
        id: "service-item-3",
        title: "Food Products",
        href: "/",
      },
      {
        id: "service-item-4",
        title: "Kitchen Products",
        href: "/",
      },
      {
        id: "service-item-5",
        title: "Household Products",
        href: "/",
      },
    ],
  },
  {
    catId: "cat-2",
    title: "Resources",
    linkItems: [
      {
        id: "resources-item-1",
        title: "Login/My Account",
        href: "/",
      },
      {
        id: "resources-item-2",
        title: "Sign Up",
        href: "/",
      },
      {
        id: "resources-item-3",
        title: "Supplier Home",
        href: "/",
      },
      {
        id: "resources-item-4",
        title: "Shipping Return",
        href: "/",
      },
      {
        id: "resources-item-5",
        title: "FAQ + Support",
        href: "/",
      },
      {
        id: "resources-item-6",
        title: "Contact",
        href: "/",
      },
    ],
  },

  {
    catId: "cat-3",
    title: "Company",
    linkItems: [
      {
        id: "company-item-1",
        title: "About Us",
        href: "/",
      },
      {
        id: "company-item-2",
        title: "Careers",
        href: "/",
      },
      {
        id: "company-item-3",
        title: "Partners",
        href: "/",
      },
      {
        id: "company-item-4",
        title: "Terms of Service",
        href: "/",
      },
      {
        id: "company-item-5",
        title: "Privacy Policy",
        href: "/",
      },
    ],
  },
];
