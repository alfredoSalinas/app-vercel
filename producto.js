import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vsyineasxlzqbdrototi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTkxNSwiZXhwIjoxOTU4ODY3OTE1fQ.sxo9h9NwJd6tmU9YaCaR4_YuFxBKQ7XbRS1FEJe8r7g'

export const supabase = createClient(supabaseUrl, supabaseKey)