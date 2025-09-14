# Blog Management System Setup

This document provides instructions for setting up the Medium blog management system in the MentorBridge application.

## Features

- **Add Medium Blogs**: Submit Medium blog URLs to automatically fetch and store blog details
- **Curated Collection**: View all stored blogs in a beautiful card-based layout
- **Automatic Data Extraction**: Fetches title, author, published date, cover image, and other metadata
- **Duplicate Prevention**: Uses unique constraints to prevent duplicate blog entries
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Prerequisites

1. **Supabase Project**: You need a Supabase project with the blogs table created
2. **Environment Variables**: Configure the required environment variables
3. **RSS2JSON API**: The system uses rss2json.com API (free tier available)

## Database Setup

### 1. Create the Blogs Table

Run the SQL commands from `supabase-schema.sql` in your Supabase SQL editor:

```sql
-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  author_name TEXT NOT NULL,
  published_date TIMESTAMP WITH TIME ZONE NOT NULL,
  cover_image_url TEXT,
  link TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL DEFAULT 'Medium',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blogs_link ON blogs(link);
CREATE INDEX IF NOT EXISTS idx_blogs_published_date ON blogs(published_date);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at);

-- Enable Row Level Security (RLS) for blogs
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Allow public read access to blogs" ON blogs
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to blogs" ON blogs
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access to blogs" ON blogs
    FOR UPDATE USING (true);
```

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under "API".

## API Endpoints

### POST /api/add-blog

Adds a new Medium blog to the collection.

**Request Body:**
```json
{
  "url": "https://medium.com/@username/article-title"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Blog added successfully",
  "data": {
    "id": "uuid",
    "title": "Blog Title",
    "author_name": "Author Name",
    "published_date": "2024-01-01T00:00:00.000Z",
    "cover_image_url": "https://example.com/image.jpg",
    "link": "https://medium.com/@username/article-title",
    "category": "Medium",
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
}
```

## Frontend Pages

### 1. Add Blog Page (`/add-blog`)

- Simple form with URL input
- Real-time validation and error handling
- Success/error message display
- Loading states during submission

### 2. Blogs Display Page (`/blogs`)

- Grid layout showing all stored blogs
- Card-based design with cover images
- Author information and publication dates
- Direct links to original Medium articles
- Refresh functionality
- Empty state handling

## Usage

### Adding a Blog

1. Navigate to `/add-blog` or click "Add New Blog" from the blogs page
2. Enter a valid Medium URL (supports both user profiles and publications)
3. Click "Add Blog" to submit
4. The system will automatically fetch and store the blog details

### Viewing Blogs

1. Navigate to `/blogs` or click "Blogs" in the navigation menu
2. Browse the curated collection of blogs
3. Click "Read More" on any blog card to open the original article
4. Use the refresh button to reload the latest blogs

## Supported URL Formats

The system supports various Medium URL formats:

- **User Articles**: `https://medium.com/@username/article-title`
- **Publication Articles**: `https://medium.com/publication-name/article-title`
- **Custom Domains**: `https://blog.example.com/article-title` (if it's a Medium publication)

## Error Handling

The system includes comprehensive error handling for:

- Invalid URL formats
- Network connectivity issues
- RSS feed parsing errors
- Database operation failures
- Duplicate blog entries

## Technical Details

### RSS Feed Processing

The system uses the rss2json.com API to convert Medium RSS feeds to JSON format, then extracts the specific blog post data.

### Data Extraction

For each blog, the system extracts:
- Title
- Author name
- Published date
- Cover image (from HTML description)
- Original link
- Category (defaults to "Medium")

### Duplicate Prevention

The system uses a unique constraint on the `link` column and upsert operations to prevent duplicate entries.

## Troubleshooting

### Common Issues

1. **"Invalid Medium URL format"**: Ensure the URL is a valid Medium link
2. **"Blog post not found in RSS feed"**: The article might not be available in the author's RSS feed
3. **"Failed to fetch blog data"**: Check your internet connection and the rss2json.com API status
4. **Database errors**: Verify your Supabase configuration and table setup

### Debug Mode

Enable debug logging by checking the browser console and server logs for detailed error information.

## Future Enhancements

Potential improvements for the blog management system:

- Bulk import functionality
- Blog categorization and tagging
- Search and filtering capabilities
- Social sharing features
- Analytics and engagement tracking
- Custom blog sources beyond Medium
