/** A screenshot shown by the image slider. */
export interface ImageSlide {
  url: string;
  title?: string;
}

/** A project of the "other projects" slider; title/description are dictionary keys. */
export interface OtherProject {
  title: string;
  description: string;
  technologies: string[];
  url: string;
}
