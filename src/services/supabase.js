import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://skinqbcpufesdsdfrwko.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNraW5xYmNwdWZlc2RzZGZyd2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTY0NTYsImV4cCI6MjA1NzM3MjQ1Nn0.HQPCye7RA2-Fe2YHTtKHhNBK-FuuaOGhmOldf2suX3g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
