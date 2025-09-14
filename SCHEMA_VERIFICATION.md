# Supabase Schema Verification Guide

## 🔍 **Check Your Table Structure**

### **Step 1: Verify Table Exists**
1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Look for the `students` table
4. Click on it to see the structure

### **Step 2: Required Columns**
Your table should have these exact columns:

| Column Name | Type | Constraints | Description |
|-------------|------|-------------|-------------|
| `id` | `text` | PRIMARY KEY | Unique identifier |
| `name` | `text` | NOT NULL | Student's full name |
| `picture` | `text` | NULLABLE | URL to profile picture |
| `role` | `text` | NOT NULL | Aspiring role |
| `company` | `text` | NULLABLE | Current company |
| `summary` | `text` | NOT NULL | Professional summary |
| `email` | `text` | NOT NULL, UNIQUE | Email address |
| `experience` | `jsonb` | NOT NULL, DEFAULT '[]' | Array of work experiences |
| `mentor_bridge_exp` | `jsonb` | NOT NULL | MentorBridge experience object |
| `skill_sets` | `text[]` | NOT NULL, DEFAULT '{}' | Array of skills |
| `inspirations` | `text[]` | NOT NULL, DEFAULT '{}' | Array of inspirations |
| `social_links` | `jsonb` | NOT NULL | Social media links object |
| `resume_link` | `text` | NULLABLE | URL to resume file |
| `batch` | `text` | NOT NULL | Batch year |
| `created_at` | `timestamptz` | DEFAULT NOW() | Creation timestamp |
| `updated_at` | `timestamptz` | DEFAULT NOW() | Update timestamp |

### **Step 3: Test Connection**
Run this in your browser console on the form page:

```javascript
// Test Supabase connection
fetch('/api/test-supabase')
  .then(response => response.json())
  .then(data => console.log('Supabase Test:', data))
  .catch(error => console.error('Error:', error));
```

### **Step 4: Common Schema Issues**

#### **❌ Wrong Column Names**
- Make sure column names match exactly (case-sensitive)
- Use underscores, not hyphens: `mentor_bridge_exp` not `mentor-bridge-exp`

#### **❌ Wrong Data Types**
- `experience` should be `jsonb`, not `text`
- `skill_sets` should be `text[]`, not `text`
- `social_links` should be `jsonb`, not `text`

#### **❌ Missing Constraints**
- `email` should be UNIQUE
- Required fields should be NOT NULL
- `id` should be PRIMARY KEY

### **Step 5: Fix Schema Issues**

If you need to fix the schema, run these SQL commands in Supabase SQL Editor:

```sql
-- Add missing columns
ALTER TABLE students ADD COLUMN IF NOT EXISTS picture TEXT;
ALTER TABLE students ADD COLUMN IF NOT EXISTS company TEXT;
ALTER TABLE students ADD COLUMN IF NOT EXISTS resume_link TEXT;

-- Fix data types
ALTER TABLE students ALTER COLUMN experience TYPE JSONB USING experience::JSONB;
ALTER TABLE students ALTER COLUMN mentor_bridge_exp TYPE JSONB USING mentor_bridge_exp::JSONB;
ALTER TABLE students ALTER COLUMN social_links TYPE JSONB USING social_links::JSONB;

-- Add constraints
ALTER TABLE students ALTER COLUMN email SET NOT NULL;
ALTER TABLE students ADD CONSTRAINT unique_email UNIQUE (email);

-- Set defaults
ALTER TABLE students ALTER COLUMN experience SET DEFAULT '[]'::JSONB;
ALTER TABLE students ALTER COLUMN skill_sets SET DEFAULT '{}';
ALTER TABLE students ALTER COLUMN inspirations SET DEFAULT '{}';
```

### **Step 6: Test Form Submission**

1. Fill out the form with test data
2. Submit the form
3. Check browser console for errors
4. Check Supabase dashboard for saved data

### **Step 7: Expected Error Messages**

| Error | Meaning | Solution |
|-------|---------|----------|
| `PGRST205` | Table doesn't exist | Create the table |
| `PGRST116` | No rows found | Normal for empty table |
| `PGRST301` | Column doesn't exist | Check column names |
| `PGRST302` | Wrong data type | Check column types |

## ✅ **Success Indicators**

- Form submits without errors
- Data appears in Supabase dashboard
- Console shows "Profile saved successfully!"
- No PGRST errors in console

## 🆘 **Still Having Issues?**

1. Check the browser console for specific error messages
2. Verify your `.env.local` has correct Supabase credentials
3. Make sure the table name is exactly `students` (lowercase)
4. Check that all required columns exist and have correct types
