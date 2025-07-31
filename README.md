# Navoda Rajapakshe - Portfolio

A professional portfolio website built with Next.js, React, and Framer Motion animations.

## Features

- ✨ Smooth animations with Framer Motion
- 🎨 Modern gradient design with professional styling
- 📱 Fully responsive design
- 🖼️ Profile image section with placeholder
- 🔗 Social media links
- 📄 Resume download functionality
- 📧 Contact form integration ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Photo

To add your profile photo:

1. Place your photo in the `public` folder (e.g., `public/profile-photo.jpg`)
2. Update the image source in `src/app/page.tsx`:
   ```jsx
   <img 
     src="/profile-photo.jpg" 
     alt="Navoda Rajapakshe" 
     className="w-full h-full rounded-full object-cover"
   />
   ```
3. Remove or comment out the placeholder div with the emoji

## Customization

- Update social media links in the component
- Modify the skills array to match your expertise
- Change the color scheme by updating the gradient classes
- Add your actual email address in the mailto link

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Deployment

The easiest way to deploy your portfolio is using the [Vercel Platform](https://vercel.com/new).

## License

This project is open source and available under the [MIT License](LICENSE).
