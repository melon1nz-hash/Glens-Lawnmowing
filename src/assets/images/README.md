# Images for Glens Lawnmowing

Place photo assets here for use with Astro's built-in `<Image />` component.

## Usage

Import and use the optimized Image component in any `.astro` or `.mdx` file:

```astro
---
import { Image } from 'astro:assets';
import myPhoto from '../assets/images/example.jpg';
---

<Image src={myPhoto} alt="Description" />
```

Images in this folder are processed at build time for optimal formats and sizing.
