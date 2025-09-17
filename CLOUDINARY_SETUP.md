# Cloudinary Gallery Integration Setup

This project now includes integration with Cloudinary to fetch and display images in the gallery. Here's how to set it up:

## 1. Environment Variables

Add your Cloudinary credentials to your Vercel project environment variables:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the following variables:

```
CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret
```

**Note:** Make sure to add these variables for all environments (Production, Preview, and Development) if you want them available in all deployments.

## 2. Cloudinary Setup

1. Sign up for a free Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Go to your [Cloudinary Dashboard](https://cloudinary.com/console)
3. Copy your Cloud Name, API Key, and API Secret
4. Add them to your Vercel environment variables (see step 1 above)

## 3. Upload Images

1. In your Cloudinary dashboard, create a folder called `gallery` (or change the folder name in the code)
2. Upload your images to this folder
3. The images will automatically appear in your gallery

## 4. Customization

### Change the Folder Name

In `src/app/gallery/page.tsx`, modify the folder parameter:

```typescript
const { images, isLoading, error, refetch } = useGetPics({
  folder: "Tamilpreneur",
  maxResults: 50,
  transformation: "f_png,q_auto",
});
```

### Change Image Transformations

Modify the transformation parameter to change how images are processed. The transformation string uses Cloudinary's format:

```typescript
transformation: "f_png,q_auto"; // Convert to PNG with automatic quality
transformation: "f_jpg,q_auto"; // Convert to JPG with automatic quality
transformation: "f_webp,q_auto"; // Convert to WebP with automatic quality
transformation: "f_auto,q_auto"; // Auto-format with automatic quality
transformation: "f_png,q_80"; // Convert to PNG with 80% quality
transformation: "f_jpg,q_90,w_800"; // Convert to JPG, 90% quality, 800px width
```

**Common transformation options:**

- `f_png` - Convert to PNG format
- `f_jpg` - Convert to JPG format
- `f_webp` - Convert to WebP format
- `f_auto` - Auto-select best format
- `q_auto` - Automatic quality optimization
- `q_80` - Set quality to 80%
- `w_800` - Set width to 800px
- `h_600` - Set height to 600px

### Change Maximum Results

Adjust the `maxResults` parameter to control how many images are fetched:

```typescript
maxResults: 100; // Fetch up to 100 images
```

## 5. Features

- **Automatic Image Loading**: Images are fetched from Cloudinary on page load
- **Loading States**: Shows a spinner while images are loading
- **Error Handling**: Displays error messages if something goes wrong
- **Retry Functionality**: Users can retry loading images if there's an error
- **Empty State**: Shows a message when no images are found
- **Responsive Design**: Images are displayed in a responsive grid
- **Image Modal**: Click on any image to view it in fullscreen with navigation

## 6. File Structure

```
src/
├── hooks/
│   └── useGetPics.ts          # Custom hook for fetching images
├── app/
│   ├── api/
│   │   └── cloudinary/
│   │       └── images/
│   │           └── route.ts   # API endpoint for Cloudinary
│   └── gallery/
│       └── page.tsx           # Gallery page component
└── components/
    └── Gallery.tsx            # Gallery component for displaying images
```

## 7. Troubleshooting

### Images Not Loading

1. Check that your environment variables are correctly set in Vercel
2. Verify that your Cloudinary credentials are correct
3. Ensure images are uploaded to the correct folder
4. Check the browser console for error messages
5. Redeploy your Vercel project after adding environment variables

### API Errors

1. Make sure your Cloudinary account is active
2. Check that your API key has the necessary permissions
3. Verify that the folder name exists in your Cloudinary account

### Performance Issues

1. Reduce the `maxResults` parameter if you have many images
2. Optimize your images before uploading to Cloudinary
3. Use appropriate transformation parameters for your use case
