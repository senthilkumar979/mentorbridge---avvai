-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  location TEXT NOT NULL,
  registration_link TEXT NOT NULL,
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_events_is_active ON events(is_active);
CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date);

-- Create trigger to automatically update updated_at for events
CREATE TRIGGER update_events_updated_at
    BEFORE UPDATE ON events
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS) for events
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access for events
CREATE POLICY "Allow public read access to events" ON events
    FOR SELECT USING (true);

-- Create policy to allow public insert access for events (admin only in practice)
CREATE POLICY "Allow public insert access to events" ON events
    FOR INSERT WITH CHECK (true);

-- Create policy to allow public update access for events (admin only in practice)
CREATE POLICY "Allow public update access to events" ON events
    FOR UPDATE USING (true);

-- Create policy to allow public delete access for events (admin only in practice)
CREATE POLICY "Allow public delete access to events" ON events
    FOR DELETE USING (true);

