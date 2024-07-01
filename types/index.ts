/**
 * Represents a navigation item with a link and title.
 */
export type NavItem = {
  href: string;
  title: string;
};

/**
 * Represents a social link with an icon URL prefix and a link href.
 */
export type SocialLink = {
  iconUrlPrefix: string;
  href: string;
};

/**
 * Represents a menu item for a cuisine, including its name, price, image, and link.
 */
export type CuisineItem = {
  name: string;
  price: number;
  img: string;
  href: string;
};

/**
 * Represents the logo for a payment provider, including the file path, width, and height.
 */
export type PaymentProvidersLogo = {
  path: string;
  width: number;
  height: number;
};

/**
 * Represents an attraction, including its title and image.
 */
export type Attraction = {
  title: string;
  img: string;
};
