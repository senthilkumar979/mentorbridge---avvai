-- Simple schema without triggers for now
-- This will create the tables without the automatic updated_at functionality

-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  picture TEXT, -- URL to uploaded profile picture
  role TEXT NOT NULL,
  company TEXT,
  summary TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  experience JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of experience objects
  mentor_bridge_exp JSONB NOT NULL, -- Single mentor bridge experience object
  skill_sets TEXT[] NOT NULL DEFAULT '{}', -- Array of skills
  inspirations TEXT[] NOT NULL DEFAULT '{}', -- Array of inspirations
  social_links JSONB NOT NULL, -- Object with LinkedIn, GitHub, website
  resume_link TEXT, -- URL to uploaded resume
  batch TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_students_batch ON students(batch);
CREATE INDEX IF NOT EXISTS idx_students_created_at ON students(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (adjust as needed)
CREATE POLICY "Allow public read access" ON students
    FOR SELECT USING (true);

-- Create policy to allow public insert access (adjust as needed)
CREATE POLICY "Allow public insert access" ON students
    FOR INSERT WITH CHECK (true);

-- Create policy to allow public update access (adjust as needed)
CREATE POLICY "Allow public update access" ON students
    FOR UPDATE USING (true);

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

-- Create policy to allow public read access for blogs
CREATE POLICY "Allow public read access to blogs" ON blogs
    FOR SELECT USING (true);

-- Create policy to allow public insert access for blogs
CREATE POLICY "Allow public insert access to blogs" ON blogs
    FOR INSERT WITH CHECK (true);

-- Create policy to allow public update access for blogs
CREATE POLICY "Allow public update access to blogs" ON blogs
    FOR UPDATE USING (true);

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'General',
  created_by TEXT NOT NULL, -- Admin user ID
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_courses_created_by ON courses(created_by);
CREATE INDEX IF NOT EXISTS idx_courses_created_at ON courses(created_at);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);

-- Enable Row Level Security (RLS) for courses
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access for courses
CREATE POLICY "Allow public read access to courses" ON courses
    FOR SELECT USING (true);

-- Create policy to allow public insert access for courses (admin only in practice)
CREATE POLICY "Allow public insert access to courses" ON courses
    FOR INSERT WITH CHECK (true);

-- Create policy to allow public update access for courses (admin only in practice)
CREATE POLICY "Allow public update access to courses" ON courses
    FOR UPDATE USING (true);

-- Create policy to allow public delete access for courses (admin only in practice)
CREATE POLICY "Allow public delete access to courses" ON courses
    FOR DELETE USING (true);

-- Create chapters table
CREATE TABLE IF NOT EXISTS chapters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL, -- Rich text/markdown content
  "order" INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_chapters_course_id ON chapters(course_id);
CREATE INDEX IF NOT EXISTS idx_chapters_order ON chapters(course_id, "order");
CREATE INDEX IF NOT EXISTS idx_chapters_created_at ON chapters(created_at);

-- Enable Row Level Security (RLS) for chapters
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access for chapters
CREATE POLICY "Allow public read access to chapters" ON chapters
    FOR SELECT USING (true);

-- Create policy to allow public insert access for chapters (admin only in practice)
CREATE POLICY "Allow public insert access to chapters" ON chapters
    FOR INSERT WITH CHECK (true);

-- Create policy to allow public update access for chapters (admin only in practice)
CREATE POLICY "Allow public update access to chapters" ON chapters
    FOR UPDATE USING (true);

-- Create policy to allow public delete access for chapters (admin only in practice)
CREATE POLICY "Allow public delete access to chapters" ON chapters
    FOR DELETE USING (true);
